import { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Date } from '@components/elements/date';
import { H3 } from '@components/elements/heading';
import { Layout, siteTitle } from '@components/layout';
import { Project } from '@models/project';

type HomeProps = {
  posts: {
    id: string;
    date: any;
    title: string;
  }[];
  projects: Project[];
};

export const Home: FunctionComponent<HomeProps> = ({ posts, projects }): JSX.Element => {
  const postsList = (
    <div>
      <H3>Posts</H3>
      <ul className='list-none space-y-2'>
        {posts.map(({ id, date, title }) => (
          <li className='' key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className='text-gray-400'>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </div>
  );

  const projectsList = (
    <div>
      <H3>Projects</H3>
      <ul className='list-none space-y-2'>
        {projects.map(({ id, name, createdAt }) => (
          <li className='' key={id}>
            <Link href={`/projects/${id}`}>
              <a>{name}</a>
            </Link>
            <br />
            <small className='text-gray-400'>
              Started: <Date dateString={createdAt} />
            </small>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='space-y-6'>
        <section>
          <p>
            Philadelphia born and raised software engineer currently based in San Francisco. You may view my resume{' '}
            <a href='/christopher-chow-resume.pdf' target='_blank'>
              here
            </a>
            .
          </p>
        </section>
        <div className='grid grid-cols-2'>
          {postsList}
          {projectsList}
        </div>
      </div>
    </Layout>
  );
};
