import { FunctionComponent } from 'react';
import Head from 'next/head';
import { H2 } from '@components/elements/heading';
import { Layout } from '@components/layout';
import { GitCommitCard } from '@components/git-commit-card';
import { Project as ProjectModel } from '@models/project';

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
        <H2>{project.name}</H2>
        <div className='space-y-4 mx-2'>{commits}</div>
      </article>
    </Layout>
  );
};
