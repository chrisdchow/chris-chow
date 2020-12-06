import { Model, Modifiers } from 'objection';
import { BaseModel } from './base-model';

export class Project extends BaseModel {
  static get tableName() {
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
          query.orWhereRaw('lower(??) like ?', [
            'name',
            namePart.toLowerCase() + '%',
          ]);
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
        to: 'git_commits.project_id',
      },
    },
  });
}

export class GitCommit extends BaseModel {
  static get tableName() {
    return 'git_commits';
  }

  static jsonSchema = {
    type: 'object',
    required: ['name', 'commitId', 'timestamp', 'message'],

    properties: {
      id: { type: 'string', format: 'uuid' },
      name: { type: 'string' },
      timestamp: { type: 'string', format: 'date' },
      message: { type: 'string' },
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
    project: {
      relation: Model.BelongsToOneRelation,
      modelClass: Project,
      join: {
        from: 'git_commits.project_id',
        to: 'projects.id',
      },
    },
  });
}
