import { GetStaticProps, GetStaticPaths } from 'next';
import { Post } from '@components/post';
import { getAllPostIds, getPostData } from '@lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = Array.isArray(params) ? params[0] : params;

  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
