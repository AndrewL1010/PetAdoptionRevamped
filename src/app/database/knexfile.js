// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
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
  pool: {
    min: 2,  // Minimum number of connections
    max: 10, // Maximum number of connections
  }


};
