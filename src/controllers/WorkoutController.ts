import { WorkoutService } from '../services/workout/WorkoutService';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import TYPES from '../config/di/types';
import Logger from '../utils/Logger';
import { Workout } from '../models/Workout';

@injectable()
export class WorkoutController {
  public constructor(
    @inject(TYPES.WorkoutService) private workoutService: WorkoutService,
  ) {}

  async getWorkouts(req: Request, res: Response): Promise<Response> {
    Logger.info(`WorkoutController:: getWorkouts: init`);
    try{
      const workouts = await this.workoutService.getWorkouts();
      return res.status(200).send(workouts);
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }

  async createWorkout(req: Request, res: Response): Promise<Response> {
    Logger.info(`WorkoutController:: createWorkout: init`);
    try{
      if(!req.body){ return res.status(400).send("Request body is missing."); }
      const insertedId = await this.workoutService.createWorkout(req.body as Workout);
      return res.status(201).send(`Workout Session id: ${insertedId} created successfully.`);
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }
}
