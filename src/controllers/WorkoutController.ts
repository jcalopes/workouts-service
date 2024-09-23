import { WorkoutService } from '../services/workout/WorkoutService';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import TYPES from '../config/di/types';
import { Workout } from '../models/Workout';
import { Logger } from 'winston';

@injectable()
export class WorkoutController {
  public constructor(
    @inject(TYPES.WorkoutService) private workoutService: WorkoutService,
    @inject(TYPES.DefaultLogger) private logger: Logger
  ) {}

  async getWorkouts(req: Request, res: Response): Promise<Response> {
    this.logger.info(`WorkoutController:: getWorkouts: init`);
    try{
      const workouts = await this.workoutService.getWorkouts();
      return res.status(200).send(workouts);
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }

  async createWorkout(req: Request, res: Response): Promise<Response> {
    this.logger.info(`WorkoutController:: createWorkout: init`);
    try{
      // TODO: Add more complete validation
      if(!req.body){ return res.status(400).send("Request body is missing."); }
      const insertedId = await this.workoutService.createWorkout(req.body as Workout);
      return res.status(201).send(`Workout Session id: ${insertedId} created successfully.`);
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }

  async getWorkout(req: Request, res: Response): Promise<Response> {
    this.logger.info(`WorkoutController:: getWorkout: init`);
    try{
      const id = req?.params?.id;
      if(!id){
        return res.status(400).send("Workout Session id is missing.");
      }
      const workout = await this.workoutService.getWorkout(id);
      return res.status(200).send(workout);
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }

  async deleteWorkout(req: Request, res: Response): Promise<Response> {
    this.logger.info(`WorkoutController:: deleteWorkout: init`);
    try{
      const id = req?.params?.id;
      if(!id){
        return res.status(400).send("Workout Session id is missing.");
      }
      const workoutDeleted = await this.workoutService.deleteWorkout(id);
      if(!workoutDeleted){
        return res.status(404).send("Workout Session not found.");
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }

}
