import Knex from 'knex';
import { Model, knexSnakeCaseMappers } from 'objection';
import knexConfig from '../knexfile';

// Initialize knex.
const knex = Knex({
  ...knexConfig.development,
  ...knexSnakeCaseMappers(),
});

Model.knex(knex);

// Error handling.
//
// NOTE: This is not a good error handler, this is a simple one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/recipes/error-handling.html
// async function errorHandler(ctx: Context, next: () => Promise<any>) {
//   try {
//     await next();
//   } catch (err) {
//     if (err instanceof ValidationError) {
//       ctx.status = 400;
//       ctx.body = {
//         error: 'ValidationError',
//         errors: err.data
//       };
//     } else if (err instanceof ForeignKeyViolationError) {
//       ctx.status = 409;
//       ctx.body = {
//         error: 'ForeignKeyViolationError'
//       };
//     } else {
//       ctx.status = 500;
//       ctx.body = {
//         error: 'InternalServerError',
//         message: err.message || {}
//       };
//     }
//   }
// }
