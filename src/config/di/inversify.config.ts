import TYPES from './types';
import { Container } from 'inversify';
import { WorkoutDao } from '../../models/WorkoutDao';
import { WorkoutDaoImpl } from '../../models/WorkoutDaoImpl';

const container = new Container();

container.bind<WorkoutDao>(TYPES.WorkoutDaoImpl).to(WorkoutDaoImpl);

export default container;