import express from "express";
import {port} from "./config/externalVariables.config";
import Logger from "./utils/Logger";
import workoutRouter from "./routes/workout/WorkoutRouter";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "../docs/swagger_output.json";

const app = express();

// Config express server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routing server
app.use("/api/v1", workoutRouter);

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app
    .listen(port, () => {
        Logger.info(`server running on port : ${port}`);
    })
    .on('error', (e) => Logger.error(e));

