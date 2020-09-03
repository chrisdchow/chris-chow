/* eslint-disable @typescript-eslint/camelcase */
// the seeder expects the exact column name, no caseMapper is available

export async function seed(knex) {
  await knex('persons').del();
  const persons = await knex('persons').insert(
    [
      {
        first_name: 'Chris',
        last_name: 'Chow',
        date_of_birth: new Date('1992-02-06'),
      },
    ],
    ['id'],
  );

  await knex('nutrition_information').del();
  const nutritionInformation = await knex('nutrition_information').insert(
    [{ name: 'water', serving_size: 240, calories: 0, protein: 0 }],
    ['id'],
  );

  await knex('food_entries').del();
  await knex('food_entries').insert([
    {
      serving: 1200,
      consumed_at: new Date(),
      person_id: persons[0].id,
      nutrition_information_id: nutritionInformation[0].id,
    },
  ]);
}
