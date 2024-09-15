import { WorkoutService } from '../services/workout/WorkoutService';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import TYPES from '../config/di/types';

@injectable()
export class WorkoutController{
    public constructor(@inject(TYPES.WorkoutService) private workoutService: WorkoutService) {}

    getWorkouts(req: Request, res: Response): Response {
        return res.send(this.workoutService.getWorkouts());
    }

}