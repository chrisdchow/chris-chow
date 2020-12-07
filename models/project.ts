import { Model, Modifiers } from 'objection';
import { BaseModel } from './base-model';
import { GitCommit } from './git-commit';

export class Project extends BaseModel {
  // these properties exist for application code
  // the rest (jsonSchema, etc) are for Objection
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  gitCommits: GitCommit[];

  static get tableName(): string {
    return 'projects';
  }

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'string', format: 'uuid' },
      name: { type: 'string' },
    },
  };

  static modifiers: Modifiers = {
    searchByName(query, name) {
      query.where((query) => {
        for (const namePart of name.trim().split(/\s+/)) {
          query.orWhereRaw('lower(??) like ?', ['name', namePart.toLowerCase() + '%']);
        }
      });
    },
  };

  static relationMappings = () => ({
    gitCommits: {
      relation: Model.HasManyRelation,
      modelClass: GitCommit,
      join: {
        from: 'projects.id',
        to: 'gitCommits.projectId',
      },
    },
  });
}
