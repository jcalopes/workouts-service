import { Workout } from './Workout';

export abstract class WorkoutDao {
  abstract connectToDatabase(dbConnString: string, dbName: string): Promise<void>;
  abstract getWorkouts(): Promise<Workout[]>;
}