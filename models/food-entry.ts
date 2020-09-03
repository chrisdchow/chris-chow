import { Model, Modifiers } from 'objection';
import { BaseModel } from './base-model';
import NutritionInformation from './nutrition-information';
import Person from './person';

export default class FoodEntry extends BaseModel {
  static get tableName() {
    return 'food_entries';
  }

  static jsonSchema = {
    type: 'object',
    required: ['consumedAt', 'serving', 'personId', 'nutritionInformationId'],

    properties: {
      id: { type: 'string', format: 'uuid' },
      consumedAt: { type: 'string', format: 'date' },
      serving: { type: 'number' },
      personId: { type: 'string', format: 'uuid' },
      nutritionInformationId: { type: 'string', format: 'uuid' },
    },
  };

  static modifiers: Modifiers = {};

  static relationMappings = () => ({
    person: {
      relation: Model.BelongsToOneRelation,
      modelClass: Person,
      join: {
        from: 'food_entries.person_id',
        to: 'persons.id',
      },
    },
    nutritionInformation: {
      relation: Model.BelongsToOneRelation,
      modelClass: NutritionInformation,
      join: {
        from: 'food_entries.nutrition_information_id',
        to: 'nutrition_information.id',
      },
    },
  });
}
