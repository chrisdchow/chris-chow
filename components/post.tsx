import { FunctionComponent } from 'react';
import { Layout } from '@components/layout';
import Head from 'next/head';
import { Date } from '@components/elements/date';
import { H2 } from '@components/elements/heading';

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
        <H2>{postData.title}</H2>
        <div className='text-gray-400'>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};
