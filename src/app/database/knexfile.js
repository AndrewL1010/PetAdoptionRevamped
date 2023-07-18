
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
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
    pool: {
      min: 0,
      max: 2,
    }
  },
  production: {
    client: 'pg',
    connection: env.EXTERNAL_URL,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
    pool: {
      min: 0,
      max: 2,
    }
  }
}
