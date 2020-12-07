import { Model, Modifiers } from 'objection';
import { BaseModel } from './base-model';
import { NutritionInformation } from './nutrition-information';
import { Person } from './person';

export class FoodEntry extends BaseModel {
  static get tableName(): string {
    return 'foodEntries';
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
        from: 'foodEntries.personId',
        to: 'persons.id',
      },
    },
    nutritionInformation: {
      relation: Model.BelongsToOneRelation,
      modelClass: NutritionInformation,
      join: {
        from: 'foodEntries.nutritionInformationId',
        to: 'nutritionInformation.id',
      },
    },
  });
}
