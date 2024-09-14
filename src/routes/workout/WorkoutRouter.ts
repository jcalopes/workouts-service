import express, { Router } from 'express';
import Logger from "../../utils/Logger";
import { WorkoutController } from '../../controllers/WorkoutController';

export class WorkoutRouting{
    constructor(private router:Router, private workoutController:WorkoutController) {
        this.router = express.Router();
        this.workoutController = workoutController;
    }


}

router.get("/workouts", function (req, res) {
    Logger.info(`WorkoutRouter:: GET: workouts/`);
    res.send("Workouts page");
});
