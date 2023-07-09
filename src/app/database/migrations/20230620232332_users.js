/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.boolean('confirmation').defaultTo(false);
        table.string('username');
        table.string('password');
        table.string('email');
        table.timestamp("created_at").defaultTo(knex.fn.now());

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
    await knex.schema.createTable('applications', (table) => {
        table.increments('id').primary();
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
        table.integer('animal_id')
            .unsigned()
            .references('id')
            .inTable('animals')
            .onDelete('CASCADE');
        table.string('firstname');
        table.string('lastname');
        table.string('occupation');
        table.string('address');
        table.string('experience');
        table.string('email');
    });


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('applications');
    await knex.schema.dropTableIfExists('users');
    await knex.schema.dropTableIfExists('animals');
    
}