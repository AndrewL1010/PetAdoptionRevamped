// Update with your config settings.
import { env } from '../../utility/EnvironmentValidatior';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: {
    port: env.DATABASE_PORT,
    host: env.DATABASE_HOST,
    database: env.DATABASE_NAME,
    user: env.DATABASE_USER,
    password: env.DATABASE_ACCESS_KEY,
  },
  debug: true,
  migrations: {
    directory: "./migrations"
  },
  seeds: {
    directory: "./seeds"
  },

};