import { Db } from 'mongodb';
import { Logger } from 'winston';

const TYPES = {
  WorkoutDaoImpl: Symbol.for('WorkoutDao'),
  WorkoutService: Symbol.for('WorkoutService'),
  WorkoutController: Symbol.for('WorkoutController'),
  WorkoutRouter: Symbol.for('WorkoutRouter'),
  DatabaseManager: Symbol.for('DatabaseManager'),
  DefaultLogger: Symbol.for('Logger'),
};

export default TYPES;

export interface ExternalDependencies {
  database: Db;
  logger: Logger;
}
