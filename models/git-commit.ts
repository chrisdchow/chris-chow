import { Model, Modifiers } from 'objection';
import { BaseModel } from './base-model';
import { Project } from './project';

export class GitCommit extends BaseModel {
  id: string;
  hash: string;
  date: string;
  message: string;
  body: string;

  static get tableName(): string {
    return 'gitCommits';
  }

  static jsonSchema = {
    type: 'object',
    required: ['name', 'commitId', 'timestamp', 'message'],

    properties: {
      id: { type: 'string', format: 'uuid' },
      hash: { type: 'string' },
      date: { type: 'string', format: 'date' },
      message: { type: 'string' },
      body: { type: 'string' },
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
    project: {
      relation: Model.BelongsToOneRelation,
      modelClass: Project,
      join: {
        from: 'gitCommits.projectId',
        to: 'projects.id',
      },
    },
  });
}
