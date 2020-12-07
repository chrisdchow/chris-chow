import { Model } from 'objection';

export class BaseModel extends Model {
  createdAt: string;
  updatedAt: string;

  $formatJson(json: any): any {
    // Remember to call the super class's implementation.
    const ret = super.$formatJson(json);

    // Next.js server side props do not serialize Date objects
    for (const [key, value] of Object.entries(ret)) {
      if (value instanceof Date) {
        ret[key] = value.toISOString();
      }
    }

    return ret;
  }

  $beforeInsert(): void {
    const timestamp = new Date().toISOString();
    this.createdAt = timestamp;
    this.updatedAt = timestamp;
  }

  $beforeUpdate(): void {
    this.updatedAt = new Date().toISOString();
  }
}
