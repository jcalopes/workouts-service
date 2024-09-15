import { WorkoutService } from '../services/workout/WorkoutService';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import TYPES from '../config/di/types';
import Logger from '../utils/Logger';

@injectable()
export class WorkoutController{
    public constructor(@inject(TYPES.WorkoutService) private workoutService: WorkoutService) {}

    async getWorkouts(req: Request, res: Response): Promise<Response> {
        Logger.info(`WorkoutController:: getWorkouts: init`);
        const workouts = await this.workoutService.getWorkouts();
        return res.status(200).send(workouts);
    }

}