import { WorkoutService } from '../services/workout/WorkoutService';
import { Request, Response } from 'express';

export class WorkoutController{
    constructor(private workoutService: WorkoutService) {
        this.workoutService = workoutService;
    }

    getWorkouts(req: Request, res: Response): Response {
        return res.send(this.workoutService.getWorkouts());
    }

}