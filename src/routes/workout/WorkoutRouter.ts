import express, { Router } from 'express';
import Logger from "../../utils/Logger";
import { WorkoutController } from '../../controllers/WorkoutController';
import { inject, injectable } from 'inversify';
import TYPES from '../../config/di/types';

const router = express.Router();
@injectable()
export class WorkoutRouter {
    public constructor(@inject(TYPES.WorkoutController) private workoutController: WorkoutController) {}

    router.get("/workouts", function (req, res) {
        Logger.info(`WorkoutRouter:: GET: workouts/`);
        res.send("Workouts page");
    });

}

