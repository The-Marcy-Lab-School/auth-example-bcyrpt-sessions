/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('liked_images', (table) => {
    table.increments('id');
    table.string('img_URL').notNullable();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
  });
  
    
    /**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
    exports.down = (knex) => knex.schema.dropTable('liked_images');
    