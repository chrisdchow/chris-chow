import { Home } from '@components/home';
import { getSortedPostsData } from '@lib/posts';

export default Home;

export async function getStaticProps() {
  const posts = await getSortedPostsData();
  return {
    props: {
      // short hand for 'posts: posts', must match object destructuring in Home
      posts,
    },
  };
}
