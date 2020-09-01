import Head from 'next/head';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Layout } from '@components/layout';

export const FirstPost: FunctionComponent = () => {
  return (
    <Layout home>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
