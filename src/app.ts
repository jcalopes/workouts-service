import express from "express";
import {port} from "./config/config";
import Logger from "./utils/Logger";
import workoutRouter from "./routes/workouts/WorkoutRouter";

const app = express();

// Config express server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routing server
app.use("/workouts", workoutRouter);

app
    .listen(port, () => {
        Logger.info(`server running on port : ${port}`);
    })
    .on('error', (e) => Logger.error(e));

