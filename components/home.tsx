import { Layout, siteTitle } from '@components/layout';
import { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Date } from '@components/elements/date';

type HomeProps = {
  posts: {
    id: string;
    date: any;
    title: string;
  }[];
  projects: {
    id: string;
    name: any;
    createdAt: string;
    updatedAt: string;
  }[];
};

export const Home: FunctionComponent<HomeProps> = ({ posts, projects }): JSX.Element => (
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
      <section>
        <h2 className=''>Posts</h2>
        <ul className='list-none space-y-4'>
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
      </section>
      <section>
        <h2 className=''>Projects</h2>
        <ul className='list-none space-y-4'>
          {projects.map(({ id, name, createdAt }) => (
            <li className='' key={id}>
              <Link href={`/projects/${id}`}>
                <a>{name}</a>
              </Link>
              <br />
              <small className='text-gray-400'>
                <Date dateString={createdAt} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Layout>
);
