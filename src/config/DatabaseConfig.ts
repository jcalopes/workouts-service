import * as mongoDB from 'mongodb';
import Logger from '../utils/Logger';
import { dbConnString, dbName } from './externalVariables.config';

export const connectToDatabase = async (): Promise<mongoDB.Db> => {
  Logger.info('iocContainerBuilder:: connectToDatabase:: Connecting to database');
  const client = new mongoDB.MongoClient(dbConnString);
  await client.connect();
  const db: mongoDB.Db = client.db(dbName);
  Logger.info(
    `MongoDbService:: connectToDatabase:: Successfully connected to database: ${db.databaseName}`,
  );
  return db;
}
