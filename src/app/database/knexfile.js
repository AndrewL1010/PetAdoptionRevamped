
// import { env } from '../../utility/EnvironmentValidatior';
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// export const production = {
//   client: 'pg',
//   connection: env.EXTERNAL_URL,
//   debug: true,
//   migrations: {
//     directory: "./migrations"
//   },
//   seeds: {
//     directory: "./seeds"
//   },

// };
// export const development = {
//   client: 'pg',
//   connection: {
//     database: "Animal",
//     user: "postgres",
//     password: '4739',
//   },
//   debug: true,
//   migrations: {
//     directory: "./migrations"
//   },
//   seeds: {
//     directory: "./seeds"
//   },
// }

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "Animal",
      user: "postgres",
      password: '4739',
    },
    debug: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
  },
  // production: {
  //   client: 'pg',
  //   connection: env.EXTERNAL_URL,
  //   debug: true,
  //   migrations: {
  //     directory: "./migrations"
  //   },
  //   seeds: {
  //     directory: "./seeds"
  //   },
  // }

};