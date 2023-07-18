/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary().notNullable();
        table.boolean('confirmation').defaultTo(false).notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());

    });
    await knex.schema.createTable('animals', (table) => {
        table.increments('id').primary();
        table.string('type').notNullable();
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.string('gender').notNullable();
        table.string('weight').notNullable();
        table.string('breed').notNullable();
        table.string('alt').notNullable();
        table.string('image').notNullable();
        table.text('description').notNullable();

    });
    await knex.schema.createTable('applications', (table) => {
        table.increments('id').primary().notNullable();
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
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('occupation').notNullable();
        table.string('address').notNullable();
        table.string('experience').notNullable();
        table.string('email').notNullable();
    });
    await knex.schema.createTable('recovery_tokens', (table) => {
        table.increments('id').primary();
        table.boolean('valid').defaultTo(true).notNullable();
        table.string('token').notNullable();


    });
    await knex.schema.createTable('products', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.decimal('price').notNullable();
        table.string('category').notNullable();
        table.string('image_path').notNullable();
        table.string('weight').notNullable();
        table.string('dimensions').notNullable();
        table.integer('stock_quantity').notNullable();


    });
    await knex.schema.createTable('orders', (table) => {
        table.increments('id').primary();
        table.integer('products_id')
            .unsigned()
            .references('id')
            .inTable('products')
            .onDelete('CASCADE')
            .notNullable();
        table.integer('users_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .notNullable();
        table.timestamp("order_date").defaultTo(knex.fn.now());
        table.string('order_status').defaultTo("Processing").notNullable();
        table.string('shipping_address').notNullable();
        table.string('billing address').notNullable();
        table.string('payment_method').notNullable();


    });


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTable('applications');
    await knex.schema.dropTable('orders');
    await knex.schema.dropTable('products');
    await knex.schema.dropTable('users');
    await knex.schema.dropTable('animals');
    await knex.schema.dropTable('recovery_tokens');

}