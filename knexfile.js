module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'chris_chow_development',
      timezone: 'UTC',
    },
  },
  // test: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'chris_chow_test',
  //     timezone: 'UTC',
  //   },
  // },
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'chris_chow_production',
  //     user: 'username',
  //     password: 'password',
  //     timezone: 'UTC',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  // }
};
