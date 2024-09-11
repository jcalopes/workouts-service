import express from 'express';
import Logger from "../../utils/Logger";
const router = express.Router();

// Workout page routes.
router.get("/", function (req, res) {
    Logger.info(`WorkoutRouter:: GET: workouts/`);
    res.send("Workouts page");
});

export default router;