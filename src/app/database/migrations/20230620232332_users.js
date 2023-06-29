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
    await knex.schema.createTable('animals', (table) => {
        table.increments('id').primary();
        table.string('type');
        table.string('name');
        table.integer('age');
        table.string('gender');
        table.string('weight');
        table.string('breed');
        table.string('alt');
        table.string('image');
        table.text('description');
    });


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('users');
    await knex.schema.dropTableIfExists('animals');
    
}