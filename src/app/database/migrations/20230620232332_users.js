/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary().notNullable;
        table.boolean('confirmation').defaultTo(false).notNullable;
        table.string('username').notNullable;
        table.string('password').notNullable;
        table.string('email').notNullable;
        table.timestamp("created_at").defaultTo(knex.fn.now());

    });
    await knex.schema.createTable('animals', (table) => {
        table.increments('id').primary();
        table.string('type').notNullable;
        table.string('name').notNullable;
        table.integer('age').notNullable;
        table.string('gender').notNullable;
        table.string('weight').notNullable;
        table.string('breed').notNullable;
        table.string('alt').notNullable;
        table.string('image').notNullable;
        table.text('description').notNullable;

    });
    await knex.schema.createTable('applications', (table) => {
        table.increments('id').primary().notNullable;
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .notNullable;
        table.integer('animal_id')
            .unsigned()
            .references('id')
            .inTable('animals')
            .onDelete('CASCADE')
            .notNullable;
        table.string('firstname').notNullable;
        table.string('lastname').notNullable;
        table.string('occupation').notNullable;
        table.string('address').notNullable;
        table.string('experience').notNullable;
        table.string('email').notNullable;
    });
    await knex.schema.createTable('recovery_tokens', (table) => {
        table.increments('id').primary();
        table.boolean('valid').defaultTo(true).notNullable;
        table.string('token').notNullable;


    });


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTable('applications');
    await knex.schema.dropTable('users');
    await knex.schema.dropTable('animals');
    await knex.schema.dropTable('recovery_tokens');

}