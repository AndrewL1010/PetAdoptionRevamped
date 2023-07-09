

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: "postgres://andrew_lu:qL7k8oUBBYYjqZQhVTRCy30ezUaLSvdm@dpg-cili7nlgkuvinfl3edc0-a.oregon-postgres.render.com/pet_sanctuary?ssl=true",
  debug: true,
  migrations: {
    directory: "./migrations"
  },
  seeds: {
    directory: "./seeds"
  },

};