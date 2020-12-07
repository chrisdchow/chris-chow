import pkg from '@next/env';
const { loadEnvConfig } = pkg;

const dev = process.env.NODE_ENV !== 'production';
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = loadEnvConfig(
  './',
  dev,
).combinedEnv;

const knexConfig = {
  client: 'postgresql',
  connection: {
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASS,
    timezone: 'UTC',
  },
  debug: process.env.NODE_ENV === 'development' ? true : false,
  pool: {
    min: 1,
    max: 1,
    afterCreate: (conn, done) => {
      done();
      return;
    },
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations',
    stub: './db/migration-stub.js',
  },
  seeds: {
    directory: './db/seeds',
    stub: './db/seed-stub.js',
  },
};

export default knexConfig;
