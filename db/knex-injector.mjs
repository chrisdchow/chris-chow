import Knex from 'knex';
import Objection from 'objection';
import knexConfig from '../knexfile.mjs';

// https://vincit.github.io/objection.js/recipes/snake-case-to-camel-case-conversion.html
// "everything is converted to camel case including properties and identifiers in relationMappings and queries"
const { knexSnakeCaseMappers } = Objection;

/**
 * Global is used here to ensure the connection
 * is cached across hot-reloads in development
 *
 * see https://github.com/vercel/next.js/discussions/12229#discussioncomment-83372
 */
let cached = global.pg;
if (!cached) cached = global.pg = {};

export function knexInstance() {
  if (!cached.instance) {
    cached.instance = Knex({
      ...knexConfig,
      ...knexSnakeCaseMappers(),
    });
  }

  return cached.instance;
}

export async function knexQueryWrapper(knexQueryFunction) {
  const knexInstance = knexInstance();

  const result = knexQueryFunction(knexInstance);

  await knexInstance.destroy();

  return result;
}
