import { WorkoutDao } from '../../models/WorkoutDao';
import { inject, injectable } from 'inversify';
import TYPES from '../../config/di/types';

@injectable()
export class WorkoutService {
    public constructor(@inject(TYPES.WorkoutDaoImpl) private workoutDao: WorkoutDao) {}

    async getWorkouts() {
        return this.workoutDao.getWorkouts();
    }
}
