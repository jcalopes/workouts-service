import TYPES from './types';
import { Container } from 'inversify';
import { WorkoutDao } from '../../models/WorkoutDao';
import { WorkoutDaoImpl } from '../../models/WorkoutDaoImpl';
import { WorkoutService } from '../../services/workout/WorkoutService';
import { WorkoutController } from '../../controllers/WorkoutController';

const container = new Container();

// Services
container.bind<WorkoutDao>(TYPES.WorkoutDaoImpl).to(WorkoutDaoImpl);
container.bind<WorkoutService>(TYPES.WorkoutService).to(WorkoutService).inSingletonScope();

// Controllers
container.bind<WorkoutController>(TYPES.WorkoutController).to(WorkoutController).inSingletonScope();

export default container;