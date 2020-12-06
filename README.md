# Chris Chow

Brain dump functioning as a personal website and public portfolio.

This application was bootstrapped from https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, type checking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

Personal customizations of the above:

- To run scripts written in Typescript with ES modules, use the node-ts-esm package.json script
- Typescript version ^4.0.2, latest major version
- Adjustments to ESLint/Prettier (so used to reading semicolons)
- Collocating test/spec files with respective code under test
- Typescript path aliases for cleaner reading imports and complying with Jest (modulePathMapper)

Further technical additions:

- Minimally obtrusive SQL-friendly ORM for Node.js called [Objection.js](https://github.com/vincit/objection.js)
- [Knex](https://github.com/knex/knex), which is a dependency for Objection.js, providing database connection and schema migrations
- ETL-ing-ish of git commit log into Postgres, querying it during Next static generation

Non-obvious details:

- Subdirectories specified as paths/alias in the root tsconfig.json use ES modules
  - Generally includes all of the files bundled/built by Next.js
- All other code (Node related, scripts, tooling) makes a best effort to use experimental ES module support with .mjs
  - Exceptions include Knex which is run with an esm flag (files don't have to be .mjs as a result)

TODO:

- Further investigation of running with experimental ESM support ({ ..., type: "module", ... })
  - Blocked on Next.js generated dist files using require()
  - "test": "NODE_ENV=test node --experimental-json-modules ./node_modules/jest/bin/jest.js",
  - "ts-node-esm": "node --loader ts-node/esm --experimental-specifier-resolution=node"
