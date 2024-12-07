import * as mongoDB from 'mongodb';
import Logger from '../../utils/Logger';
import { dbConnString, dbName } from '../../config/externalVariables.config';
import { Db } from 'mongodb';

export const connectToDatabase = async (): Promise<mongoDB.Db> => {
  Logger.info('Database Config:: connectToDatabase:: Connecting to database');
  const client = new mongoDB.MongoClient(dbConnString);
  await client.connect();
  const db: Db = client.db(dbName);
  Logger.info(
    `Database Config:: connectToDatabase:: Successfully connected to database: ${db.databaseName}`,
  );
  return db;
};
