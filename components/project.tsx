import { FunctionComponent } from 'react';
import { Layout } from '@components/layout';
import { Project as ProjectModel } from '@models/project';
import { GitCommitCard } from '@components/git-commit-card';
import Head from 'next/head';

type ProjectProps = {
  project: ProjectModel;
};

export const Project: FunctionComponent<ProjectProps> = ({ project }) => {
  const commits = project.gitCommits.map((commit) => {
    return <GitCommitCard key={commit.id} gitCommit={commit}></GitCommitCard>;
  });

  return (
    <Layout>
      <Head>
        <title>{project.name}</title>
      </Head>
      <article>
        <h2 className='px-3 py-4 text-xl'>{project.name}</h2>
        <div className='space-y-2'>{commits}</div>
      </article>
    </Layout>
  );
};
