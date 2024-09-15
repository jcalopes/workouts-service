import 'reflect-metadata'; // Use polyfill globally, as stated by InversifyJS docs

import express from "express";
import {port} from "./config/externalVariables.config";
import Logger from "./utils/Logger";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "../docs/swagger_output.json";
import { iocContainerBuilder } from './config/di/inversify.config';
import { WorkoutRouter } from './routes/workout/WorkoutRouter';
import TYPES from './config/di/types';

const app = express();

// Config express server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get Inversify Js Ioc container
const iocContainer= iocContainerBuilder();

// Define routing server
const workoutRouter = iocContainer.get<WorkoutRouter>(TYPES.WorkoutRouter);
app.use("/api/v1", workoutRouter.getWorkoutRouter());

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app
    .listen(port, () => {
        Logger.info(`server running on port : ${port}`);
    })
    .on('error', (e) => Logger.error(e));

