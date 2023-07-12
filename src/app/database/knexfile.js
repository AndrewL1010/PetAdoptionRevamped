
const { env } = require('../../utility/EnvironmentValidatior');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

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
  production: {
    client: 'pg',
    connection: env.EXTERNAL_URL,
    debug: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
  }
}
