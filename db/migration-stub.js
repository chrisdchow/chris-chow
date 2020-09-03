export async function up(knex) {
  await knex.schema.createTable('stub_table', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  });
}

export async function down(knex) {
  return knex.schema.dropTableIfExists('stub_table');
}
