import * as mongoDB from 'mongodb';
import Logger from '../utils/Logger';
import { WorkoutDao } from './WorkoutDao';
import { Workout } from './Workout';
import { inject, injectable } from 'inversify';
import TYPES from '../config/di/types';
import { workoutsCollection } from '../config/externalVariables.config';
import { Db } from 'mongodb';

@injectable()
export class WorkoutDaoImpl extends WorkoutDao {
  private readonly workoutsCollection: mongoDB.Collection;

  public constructor(@inject(TYPES.DatabaseManager) private databaseManager: Db) {
    super();
    this.workoutsCollection = this.databaseManager.collection(workoutsCollection);
  }

  async getWorkouts(): Promise<Workout[]> {
    if (!this.workoutsCollection) {
      throw new Error(
        'MongoDbService:: getWorkouts:: Error connecting to database',
      );
    }
    Logger.info(`WorkoutDaoImpl:: getWorkouts: init`);
    return (await this.workoutsCollection.find({}).toArray()) as Workout[];
  }
}
