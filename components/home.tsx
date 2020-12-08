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
    <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {posts.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
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
  </Layout>
);
