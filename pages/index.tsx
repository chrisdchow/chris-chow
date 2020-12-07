import { Home } from '@components/home';
import { getPosts } from '@lib/posts';
import { getProjects } from '@lib/projects';

export default Home;

export async function getStaticProps() {
  const posts = await getPosts();
  const projects = await getProjects();
  return {
    props: {
      // short hand for 'posts: posts', must match object destructuring in Home
      posts,
      projects,
    },
  };
}
