import { Layout, siteTitle } from '@components/layout';
import { FunctionComponent } from 'react';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export const Home: FunctionComponent = (): JSX.Element => (
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
  </Layout>
);
