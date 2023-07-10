
import {env} from '../../utility/EnvironmentValidatior';
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: env.EXTERNAL_URL,
  debug: true,
  migrations: {
    directory: "./migrations"
  },
  seeds: {
    directory: "./seeds"
  },

};
// module.exports = {
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

// };