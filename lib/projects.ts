// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { knexInstance } from '@db/knex-injector.mjs';
import { Project } from '@models/project';

export async function getProjects(): Promise<any[]> {
  const knex = knexInstance();
  Project.knex(knex);

  const projects = await Project.query().orderBy('createdAt', 'desc');
  return projects.map((project) => project.toJSON());
}

export async function getProjectIds(): Promise<string[]> {
  const knex = knexInstance();
  Project.knex(knex);

  const projects = await Project.query().select('id').orderBy('createdAt');
  return projects.map((project) => project.id);
}

export async function getProject(id: string): Promise<any> {
  const knex = knexInstance();
  Project.knex(knex);

  const project = await Project.query().findById(id).withGraphFetched('gitCommits');

  return project;
}
