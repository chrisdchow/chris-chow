import { GetStaticProps, GetStaticPaths } from 'next';
import { Project } from '@components/project';
import { getProjectIds, getProject } from '@lib/projects';

export const getStaticPaths: GetStaticPaths = async () => {
  const projectIds = await getProjectIds();

  // conform to Next.js param structure
  const paths = projectIds.map((projectId) => {
    return {
      params: {
        id: projectId,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = Array.isArray(params) ? params[0] : params;

  const project = await getProject(id);

  return {
    props: {
      project: project.toJSON(),
    },
  };
};

export default Project;
