import * as mongoDB from "mongodb";
import Logger from '../utils/Logger';
import { WorkoutDao } from './WorkoutDao';
import { dbConnString, dbName, workoutsCollection } from '../config/externalVariables.config';
import { Workout } from './Workout';

export class WorkoutDaoImpl extends WorkoutDao{
    private workoutsCollection: mongoDB.Collection | undefined;

    async connectToDatabase(): Promise<void> {
      Logger.info('MongoDbService:: connectToDatabase:: Connecting to database');
      try {
        const client = new mongoDB.MongoClient(dbConnString);
        await client.connect();
        const db: mongoDB.Db = client.db(dbName);
        this.workoutsCollection = db.collection(workoutsCollection);
        Logger.info(`MongoDbService:: connectToDatabase:: Successfully connected to database: ${db.databaseName}`);
      }catch (error) {
        Logger.error(`MongoDbService:: connectToDatabase:: Error connecting to database: ${error}`);
      }
    }

    async getWorkouts(): Promise<Workout[]> {
      if (!this.workoutsCollection) {
          throw new Error("MongoDbService:: getWorkouts:: Error connecting to database");
      }
      return (await this.workoutsCollection.find({}).toArray()) as Workout[];
    }


}