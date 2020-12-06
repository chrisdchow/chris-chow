# tl;dr

1. Knex CLI related files (migrations and seeds) must be written in .js
2. All other files (e.g. knex-injector) can be written as usual in Typescript.
3. Knex CLI requires the DB environment variables, which are passed in via yarn script.
4. Next.js automatically sets environment variables during its runtime (dev, build, start).

The Knex CLI does not support Typescript AND ESM (ECMAScript modules). They can be used separately.

Typescript requires a workaround using ts-node:

1. `require('ts-node/register')` in knexfile
2. having ts-node as yet another dependency (which isn't the worst, especially if scripts are written in ts)

Using ESM:

1. Use --esm argument into the Knex CLI

Together, the CLI breaks. https://github.com/knex/knex/issues/4018

It is preferable to just have it in .js instead of .ts with an additional one-off dependency.
When migrating and seeding, the .env.development vars are passed in via package.json scripts.
