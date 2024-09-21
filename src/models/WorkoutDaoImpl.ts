import * as mongoDB from 'mongodb';
import Logger from '../utils/Logger';
import { WorkoutDao } from './WorkoutDao';
import { Workout } from './Workout';
import { injectable } from 'inversify';

@injectable()
export class WorkoutDaoImpl extends WorkoutDao {
  private workoutsCollection: mongoDB.Collection;

  public async constructor() {
    super();
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
