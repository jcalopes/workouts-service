import { WorkoutDao } from '../../models/WorkoutDao';
import { inject, injectable } from 'inversify';
import TYPES from '../../config/di/types';
import Logger from '../../utils/Logger';
import { Workout } from '../../models/Workout';
import { Request } from 'express';

@injectable()
export class WorkoutService {
  public constructor(
    @inject(TYPES.WorkoutDaoImpl) private workoutDao: WorkoutDao,
  ) {}
  async getWorkouts(): Promise<Workout[]> {
    Logger.info(`WorkoutService:: getWorkouts: init`);
    try {
      return await this.workoutDao.getWorkouts();
    } catch (error) {
      Logger.error(`WorkoutService:: getWorkouts: Error: ${error}`);
      throw error;
    }
  }

  async createWorkout(workout: Workout): Promise<string> {
    Logger.info(`WorkoutService:: createWorkout: init`);
    try {
      return await this.workoutDao.createWorkout(workout);
    } catch (error) {
      Logger.error(`WorkoutService:: getWorkouts: Error: ${error}`);
      throw error;
    }
  }
}
