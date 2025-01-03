import * as mongoDB from 'mongodb';
import { WorkoutDao } from '../contracts/WorkoutDao';
import { Workout } from './Workout';
import { inject, injectable } from 'inversify';
import TYPES from '../../application/di/types';
import { workoutsCollection } from '../../config/externalVariables.config';
import { Db, ObjectId } from 'mongodb';
import { Logger } from 'winston';

@injectable()
export class WorkoutDaoImpl extends WorkoutDao {
  private readonly workoutsCollection: mongoDB.Collection;

  public constructor(
    @inject(TYPES.DatabaseManager) private readonly databaseManager: Db,
    @inject(TYPES.DefaultLogger) private readonly logger: Logger,
  ) {
    super();
    this.workoutsCollection =
      this.databaseManager.collection(workoutsCollection);
  }

  async getWorkouts(): Promise<Workout[]> {
    this.logger.info(`WorkoutDaoImpl:: getWorkouts: init`);
    return (await this.workoutsCollection.find({}).toArray()) as Workout[];
  }

  async createWorkout(workout: Workout): Promise<string> {
    this.logger.info(`WorkoutDaoImpl:: createWorkout: init`);
    const insertedDoc = await this.workoutsCollection.insertOne(workout);
    this.logger.debug(
      `WorkoutDaoImpl:: createWorkout: insertedDoc: ${JSON.stringify(insertedDoc)}`,
    );
    if (insertedDoc.acknowledged) {
      return insertedDoc.insertedId.toString();
    }
    throw new Error('Failed to insert a new workout session.');
  }

  async getWorkout(id: string): Promise<Workout> {
    this.logger.info(`WorkoutDaoImpl:: getWorkout: init`);
    const query = { _id: new ObjectId(id) };
    return (await this.workoutsCollection.findOne(query)) as Workout;
  }

  async deleteWorkout(id: string): Promise<boolean> {
    this.logger.info(`WorkoutDaoImpl:: deleteWorkout: init`);
    const query = { _id: new ObjectId(id) };
    return !!(await this.workoutsCollection.deleteOne(query)).deletedCount;
  }
}
