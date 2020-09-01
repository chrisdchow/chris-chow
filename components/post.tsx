import { FunctionComponent } from 'react';
import { Layout } from '@components/layout';
import Head from 'next/head';
import { Date } from '@components/date';
import utilStyles from '@styles/utils.module.css';

type PostProps = {
  postData: {
    id: string;
    date: any;
    title: string;
    contentHtml: string;
  };
};

export const Post: FunctionComponent<PostProps> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};