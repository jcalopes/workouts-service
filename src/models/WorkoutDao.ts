import { Workout } from './Workout';
import { injectable } from 'inversify';

@injectable()
export abstract class WorkoutDao {
  abstract getWorkouts(): Promise<Workout[]>;
  abstract createWorkout(workout: Workout): Promise<string>;
}
