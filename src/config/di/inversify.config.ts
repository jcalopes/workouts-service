import TYPES, { ExternalDependencies } from './types';
import { Container } from 'inversify';
import { WorkoutDao } from '../../models/WorkoutDao';
import { WorkoutDaoImpl } from '../../models/WorkoutDaoImpl';
import { WorkoutService } from '../../services/workout/WorkoutService';
import { WorkoutController } from '../../controllers/WorkoutController';
import { WorkoutRouter } from '../../routes/workout/WorkoutRouter';
import * as mongoDB from 'mongodb';

export const iocContainerBuilder = ({database}: ExternalDependencies) => {
  const iocContainer = new Container();

  // Services
  iocContainer.bind<WorkoutDao>(TYPES.WorkoutDaoImpl).to(WorkoutDaoImpl);
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

  // Database
  iocContainer.bind<mongoDB.Db>(TYPES.DatabaseManager).toConstantValue(database);

  return iocContainer;
};

