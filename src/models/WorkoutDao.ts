import { Workout } from './Workout';
import { injectable } from 'inversify';

@injectable()
export abstract class WorkoutDao {
  abstract connectToDatabase(
    dbConnString: string,
    dbName: string,
  ): Promise<void>;
  abstract getWorkouts(): Promise<Workout[]>;
}
