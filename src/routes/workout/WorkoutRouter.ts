import express, { Router } from 'express';
import { WorkoutController } from '../../controllers/WorkoutController';
import { inject, injectable } from 'inversify';
import TYPES from '../../config/di/types';
import Logger from '../../utils/Logger';

@injectable()
export class WorkoutRouter {
  private readonly router: Router;

  public constructor(
    @inject(TYPES.WorkoutController)
    private workoutController: WorkoutController,
  ) {
    this.router = express.Router();
  }

  public getWorkoutRouter(): Router {
    this.router.get('/workouts', async (req, res) => {
      Logger.info('WorkoutRouter:: getWorkouts: init');
      await this.workoutController.getWorkouts(req, res);
    });

    this.router.post('/workouts', async (req, res) => {
      Logger.info('WorkoutRouter:: postWorkout: init');
      await this.workoutController.createWorkout(req, res);
    });

    this.router.get('/workouts/:id', async (req, res) => {
      Logger.info('WorkoutRouter:: getWorkoutId: init');
      await this.workoutController.getWorkout(req, res);
    });

    return this.router;
  }
}
