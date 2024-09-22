import 'reflect-metadata'; // Use polyfill globally, as stated by InversifyJS docs

import express from 'express';
import { dbConnString, dbName, port } from './config/externalVariables.config';
import Logger from './utils/Logger';
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from '../docs/swagger_output.json';
import { iocContainerBuilder } from './config/di/inversify.config';
import { WorkoutRouter } from './routes/workout/WorkoutRouter';
import TYPES, { ExternalDependencies } from './config/di/types';
import { connectToDatabase } from './config/DatabaseConfig';

const app = express();

// Config express server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToDatabase().then((mongoDb) => {
  const externalDependencies = { database: mongoDb } as ExternalDependencies;

  // Get Inversify Js container
  const iocContainer = iocContainerBuilder(externalDependencies);

  // Define routing server
  const workoutRouter = iocContainer.get<WorkoutRouter>(TYPES.WorkoutRouter);
  app.use('/api/v1', workoutRouter.getWorkoutRouter());

  // Swagger Docs
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

  app
    .listen(port, () => {
      Logger.info(`Server running on port : ${port}`);
    })
    .on('error', (e) => Logger.error(e));

}, (e) => Logger.error(`${e} DB Info: ${dbConnString} : ${dbName})`));


