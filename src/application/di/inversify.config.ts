import TYPES, { ExternalDependencies } from './types';
import { Container } from 'inversify';
import { WorkoutDao } from '../../domain/contracts/WorkoutDao';
import { WorkoutDaoImpl } from '../../domain/models/WorkoutDaoImpl';
import { WorkoutService } from '../services/workout/WorkoutService';
import { WorkoutController } from '../../api/controllers/WorkoutController';
import { WorkoutRouter } from '../../api/routes/workout/WorkoutRouter';
import * as mongoDB from 'mongodb';
import { Logger } from 'winston';

export const iocContainerBuilder = ({
  database,
  logger,
}: ExternalDependencies) => {
  const iocContainer = new Container();

  // Services
  iocContainer
    .bind<WorkoutDao>(TYPES.WorkoutDaoImpl)
    .to(WorkoutDaoImpl)
    .inSingletonScope();
  iocContainer
    .bind<WorkoutService>(TYPES.WorkoutService)
    .to(WorkoutService)
    .inSingletonScope();

  // Controllers
  iocContainer
    .bind<WorkoutController>(TYPES.WorkoutController)
    .to(WorkoutController)
    .inSingletonScope();

  // Routers
  iocContainer
    .bind<WorkoutRouter>(TYPES.WorkoutRouter)
    .to(WorkoutRouter)
    .inSingletonScope();

  // External Dependencies
  iocContainer
    .bind<mongoDB.Db>(TYPES.DatabaseManager)
    .toConstantValue(database);
  iocContainer.bind<Logger>(TYPES.DefaultLogger).toConstantValue(logger);

  return iocContainer;
};
