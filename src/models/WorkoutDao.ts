import { Workout } from './Workout';
import { injectable } from 'inversify';

@injectable()
export abstract class WorkoutDao {
  abstract getWorkouts(): Promise<Workout[]>;
  abstract getWorkout(id: string): Promise<Workout>;
  abstract deleteWorkout(id: string): Promise<boolean>;
  abstract createWorkout(workout: Workout): Promise<string>;
}
