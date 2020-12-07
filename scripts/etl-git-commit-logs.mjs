/* eslint-disable @typescript-eslint/no-unused-vars */

import util from 'util';
const execPromise = util.promisify(exec);
import { exec } from 'child_process';
import Commander from 'commander';
const { program } = Commander;
import simpleGit from 'simple-git';
import { knexInstance } from '../db/knex-injector.mjs';

const knex = knexInstance();

// run this to see if it's hooked up
// const chris = await knex('persons');

const baseOptions = {
  binary: 'git',
};

program
  .requiredOption('-d, --directory <type>', 'repository directory')
  .requiredOption('-p, --project <type>', 'project name');

program.parse(process.argv);

const { directory, project } = program;

try {
  const git = simpleGit({ ...baseOptions, baseDir: directory });
  await git.init();
  const { all: commits } = await git.log();

  const { id } = await findOrCreateProject(project);

  const formattedCommits = commits.map((commit) => {
    const { hash, date, message, body } = commit;
    return {
      hash,
      date,
      message,
      body,
      project_id: id,
    };
  });

  await createIfNotExistGitCommits(formattedCommits);

  await knex.destroy();
} catch (e) {
  console.error('Error:', e);
  await knex.destroy();
}

async function findOrCreateProject(projectName) {
  const projects = knex('projects');
  const record = await projects.first('id').where('name', projectName);

  if (!record) {
    return await projects.insert({ name: projectName });
  }

  return record;
}

async function createIfNotExistGitCommits(formattedCommits) {
  const gitCommits = knex('gitCommits').debug();
  const addedCommits = await gitCommits.insert(formattedCommits).onConflict('hash').ignore();

  return addedCommits;
}

// assumes single parent history
async function badGetAllCommits(repository) {
  const head = await repository.getHeadCommit();
  const commits = [head];

  // Here we create an await our promise:
  await new Promise((resolve, reject) => {
    const historyEventEmitter = head.history();

    historyEventEmitter
      .on('commit', function (commit) {
        commits.push(commit);
      })
      .on('end', resolve)
      .on('error', reject);

    historyEventEmitter.start();
  });

  return commits;
}

// keep this for historical purposes
async function cobbledFetchGitLogsAsJson() {
  // sed available on OSX doesn't recognize \r as a special character unlike the sed on Linux does
  // use tr for the last hurdle of removing newlines
  const NodeGitCommitLogAsJson = `
    NodeGit log \
    --pretty=format:'{%n  "commit": "%H",%n  "author": "%aN <%aE>",%n  "date": "%ad",%n  "message": "%f",%n  "body": "%B"%n},' \
    | sed '1 s/^/[/; $ s/,//; $ s/$/]/' | tr -d '\r\n'
  `;

  try {
    const { stdout } = await execPromise(NodeGitCommitLogAsJson);
    return JSON.parse(stdout);
  } catch (e) {
    console.error(e);
  }
}
