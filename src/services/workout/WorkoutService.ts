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
      this.logger.error(`WorkoutService:: getWorkouts: ${error}`);
      throw error;
    }
  }

  async createWorkout(workout: Workout): Promise<string> {
    this.logger.info(`WorkoutService:: createWorkout: init`);
    try {
      return await this.workoutDao.createWorkout(workout);
    } catch (error) {
      this.logger.error(`WorkoutService:: createWorkout: ${error}`);
      throw error;
    }
  }

  async getWorkout(id: string): Promise<Workout> {
    this.logger.info(`WorkoutService:: getWorkouts: init`);
    try {
      return await this.workoutDao.getWorkout(id);
    } catch (error) {
      this.logger.error(`WorkoutService:: getWorkoutId: ${error}`);
      throw error;
    }
  }

  async deleteWorkout(id: string): Promise<boolean> {
    this.logger.info(`WorkoutService:: deleteWorkouts: init`);
    try {
      return await this.workoutDao.deleteWorkout(id);
    } catch (error) {
      this.logger.error(`WorkoutService:: deleteWorkouts: ${error}`);
      throw error;
    }
  }
}
