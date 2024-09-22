import { Db } from 'mongodb';

const TYPES = {
  WorkoutDaoImpl: Symbol.for('WorkoutDao'),
  WorkoutService: Symbol.for('WorkoutService'),
  WorkoutController: Symbol.for('WorkoutController'),
  WorkoutRouter: Symbol.for('WorkoutRouter'),
  DatabaseManager: Symbol.for('DatabaseManager'),
};

export default TYPES;

export interface ExternalDependencies {
  database: Db;
}
