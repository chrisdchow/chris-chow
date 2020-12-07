import { Model, Modifiers } from 'objection';
import { BaseModel } from './base-model';
import { FoodEntry } from './food-entry';

export class Person extends BaseModel {
  static get tableName(): string {
    return 'persons';
  }

  static jsonSchema = {
    type: 'object',
    required: ['firstName', 'lastName', 'dateOfBirth'],

    properties: {
      id: { type: 'string', format: 'uuid' },
      firstName: { type: 'string', minLength: 1, maxLength: 255 },
      lastName: { type: 'string', minLength: 1, maxLength: 255 },
      dateOfBirth: { type: 'string', format: 'date' },
      // address: {
      //   type: 'object',
      //   properties: {
      //     street: { type: 'string' },
      //     city: { type: 'string' },
      //     zipCode: { type: 'string' }
      //   }
      // }
    },
  };

  static modifiers: Modifiers = {
    searchByName(query, name) {
      query.where((query) => {
        for (const namePart of name.trim().split(/\s+/)) {
          for (const column of ['firstName', 'lastName']) {
            query.orWhereRaw('lower(??) like ?', [column, namePart.toLowerCase() + '%']);
          }
        }
      });
    },
  };

  static relationMappings = () => ({
    foodEntries: {
      relation: Model.HasManyRelation,
      modelClass: FoodEntry,
      join: {
        from: 'persons.id',
        to: 'foodEntries.personId',
      },
    },
  });
}
