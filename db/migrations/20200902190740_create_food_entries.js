export async function up(knex) {
  await knex.schema.createTable('food_entries', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    table.decimal('serving').notNullable();
    table.dateTime('consumed_at').notNullable();
    table
      .uuid('person_id')
      .references('id')
      .inTable('persons')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table
      .uuid('nutrition_information_id')
      .references('id')
      .inTable('nutrition_information')
      .notNullable()
      .onDelete('CASCADE')
      .index();
  });
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('food_entries');
}
