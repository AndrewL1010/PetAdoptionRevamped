/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('username');
        table.string('password');

    });
    await knex.schema.createTable('dogs', (table) => {
        table.increments('id').primary();
        table.string('type');
        table.string('name');
        table.integer('age');
        table.string('gender');
        table.string('weight');
        table.string('breed');
        table.string('alt');
        table.string('image');

    });
    await knex.schema.createTable('cats', (table) => {
        table.increments('id').primary();
        table.string('type');
        table.string('name');
        table.integer('age');
        table.string('gender');
        table.string('weight');
        table.string('breed');
        table.string('alt');
        table.string('image');

    });
    await knex.schema.createTable('rabbits', (table) => {
        table.increments('id').primary();
        table.string('type');
        table.string('name');
        table.integer('age');
        table.string('gender');
        table.string('weight');
        table.string('breed');
        table.string('alt');
        table.string('image');

    });
    await knex.schema.createTable('birds', (table) => {
        table.increments('id').primary();
        table.string('type');
        table.string('name');
        table.integer('age');
        table.string('gender');
        table.string('weight');
        table.string('breed');
        table.string('alt');
        table.string('image');

    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('users');
    await knex.schema.dropTableIfExists('dogs');
    await knex.schema.dropTableIfExists('cats');
    await knex.schema.dropTableIfExists('rabbits');
    await knex.schema.dropTableIfExists('birds');
}