export async function up(knex) {
  await knex.schema.createTable('nutrition_information', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    table.string('name').notNullable().index();
    table.decimal('serving_size').notNullable();
    table.decimal('calories').notNullable().index();
    table.decimal('protein').notNullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('nutrition_information');
}
