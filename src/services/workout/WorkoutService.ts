import { WorkoutDao } from '../../models/WorkoutDao';
import { inject, injectable } from 'inversify';
import TYPES from '../../config/di/types';
import { Workout } from '../../models/Workout';
import { Logger } from 'winston';

@injectable()
export class WorkoutService {
  public constructor(
    @inject(TYPES.WorkoutDaoImpl) private workoutDao: WorkoutDao,
    @inject(TYPES.DefaultLogger) private logger: Logger
  ) {}
  async getWorkouts(): Promise<Workout[]> {
    this.logger.info(`WorkoutService:: getWorkouts: init`);
    try {
      return await this.workoutDao.getWorkouts();
    } catch (error) {
      this.logger.error(`WorkoutService:: getWorkouts: Error: ${error}`);
      throw error;
    }
  }

  async createWorkout(workout: Workout): Promise<string> {
    this.logger.info(`WorkoutService:: createWorkout: init`);
    try {
      return await this.workoutDao.createWorkout(workout);
    } catch (error) {
      this.logger.error(`WorkoutService:: getWorkouts: Error: ${error}`);
      throw error;
    }
  }

  async getWorkout(id: string): Promise<Workout> {
    this.logger.info(`WorkoutService:: getWorkouts: init`);
    try {
      return await this.workoutDao.getWorkout(id);
    } catch (error) {
      this.logger.error(`WorkoutService:: getWorkouts: Error: ${error}`);
      throw error;
    }
  }
}
