import { Layout, siteTitle } from '@components/layout';
import { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Date } from '@components/date';
import utilStyles from '@styles/utils.module.css';

type HomeProps = {
  posts: {
    id: string;
    date: any;
    title: string;
  }[];
};

export const Home: FunctionComponent<HomeProps> = ({ posts }): JSX.Element => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <div className='space-y-6'>
      <section>
        <p>
          Philadelphia born and raised software engineer currently based in San
          Francisco. You may view my resume{' '}
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
              <Link href='/posts/[id]' as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Layout>
);
