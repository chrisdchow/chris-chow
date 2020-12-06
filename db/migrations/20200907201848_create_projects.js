export async function up(knex) {
  await knex.schema.createTable('projects', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    table.string('name').notNullable().index();
  });

  await knex.schema.createTable('git_commits', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    table.string('commit_id').notNullable();
    table.timestamp('timestamp').notNullable();
    table.text('message').notNullable();
    table
      .uuid('project_id')
      .references('id')
      .inTable('projects')
      .notNullable()
      .onDelete('CASCADE')
      .index();
  });
}

export async function down(knex) {
  return knex.schema
    .dropTableIfExists('git_commits')
    .dropTableIfExists('projects');
}
