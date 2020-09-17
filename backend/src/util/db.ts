import { createConnection, getConnection } from 'typeorm';

export class DBConnection {
  static async create() {
    await createConnection();
  }

  static async close() {
    await getConnection().close();
  }

  static async clear() {
    const connection = getConnection();
    const entities = connection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  }
};
