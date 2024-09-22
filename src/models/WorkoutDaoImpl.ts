import * as mongoDB from 'mongodb';
import { WorkoutDao } from './WorkoutDao';
import { Workout } from './Workout';
import { inject, injectable } from 'inversify';
import TYPES from '../config/di/types';
import { workoutsCollection } from '../config/externalVariables.config';
import { Db } from 'mongodb';
import { Logger } from 'winston';

@injectable()
export class WorkoutDaoImpl extends WorkoutDao {
  private readonly workoutsCollection: mongoDB.Collection;

  public constructor(@inject(TYPES.DatabaseManager) private databaseManager: Db,
                     @inject(TYPES.DefaultLogger) private logger: Logger) {
    super();
    this.workoutsCollection = this.databaseManager.collection(workoutsCollection);
  }

  async getWorkouts(): Promise<Workout[]> {
    this.logger.info(`WorkoutDaoImpl:: getWorkouts: init`);
    return (await this.workoutsCollection.find({}).toArray()) as Workout[];
  }

  async createWorkout(workout:Workout): Promise<string> {
    this.logger.info(`WorkoutDaoImpl:: createWorkout: init`);
    const insertedDoc = (await this.workoutsCollection.insertOne(workout));
    this.logger.debug(`WorkoutDaoImpl:: createWorkout: insertedDoc: ${JSON.stringify(insertedDoc)}`);
    if(insertedDoc.acknowledged){
      return insertedDoc.insertedId.toString();
    }
    throw new Error("Failed to insert a new workout session.");
  }

}
