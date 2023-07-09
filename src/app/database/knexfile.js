// Update with your config settings.
import { env } from '../../utility/EnvironmentValidatior';
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: {
    database: env.POSTGRES_DATABASE,
    user: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
  },
  debug: true,
  migrations: {
    directory: "./migrations"
  },
  seeds: {
    directory: "./seeds"
  },

};

