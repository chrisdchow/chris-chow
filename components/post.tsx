import { FunctionComponent } from 'react';
import parse, { domToReact } from 'html-react-parser';
import Head from 'next/head';
import { Layout } from '@components/layout';
import { Date } from '@components/elements/date';
import { H2 } from '@components/elements/heading';
import { P } from '@components/elements/paragraph';

type PostProps = {
  postData: {
    id: string;
    date: any;
    title: string;
    contentHtml: string;
  };
};

export const Post: FunctionComponent<PostProps> = ({ postData }) => {
  const content = parse(postData.contentHtml, {
    replace: function ({ type, name, children }) {
      if (type === 'tag' && name === 'p') {
        return <P>{domToReact(children)}</P>;
      }
    },
  });

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
        {content}
      </article>
    </Layout>
  );
};
