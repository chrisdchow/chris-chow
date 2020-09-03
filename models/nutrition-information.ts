import { Model, Modifiers } from 'objection';
import { BaseModel } from './base-model';
import FoodEntry from './food-entry';

export default class NutritionInformation extends BaseModel {
  static get tableName() {
    return 'nutrition_information';
  }

  static jsonSchema = {
    type: 'object',
    required: ['name', 'servingSize', 'calories', 'protein'],

    properties: {
      id: { type: 'string', format: 'uuid' },
      name: { type: 'string' },
      servingSize: { type: 'number' },
      calories: { type: 'number' },
      protein: { type: 'number' },
    },
  };

  static modifiers: Modifiers = {
    searchByName(query, name) {
      query.where((query) => {
        for (const namePart of name.trim().split(/\s+/)) {
          query.orWhereRaw('lower(??) like ?', [
            'name',
            namePart.toLowerCase() + '%',
          ]);
        }
      });
    },
  };

  static relationMappings = () => ({
    foodEntries: {
      relation: Model.HasManyRelation,
      modelClass: FoodEntry,
      join: {
        from: 'nutrition_information.id',
        to: 'food_entries.nutrition_information_id',
      },
    },
  });
}
