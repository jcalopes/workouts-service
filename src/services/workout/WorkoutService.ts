import { WorkoutDao } from '../../models/WorkoutDao';
import { inject, injectable } from 'inversify';
import TYPES from '../../config/di/types';
import Logger from '../../utils/Logger';
import { Workout } from '../../models/Workout';

@injectable()
export class WorkoutService {
    public constructor(@inject(TYPES.WorkoutDaoImpl) private workoutDao: WorkoutDao) {}
    async getWorkouts():Promise<Workout[]> {
        Logger.info(`WorkoutService:: getWorkouts: init`);
        return await this.workoutDao.getWorkouts();
    }
}
