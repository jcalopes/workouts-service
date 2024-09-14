import { WorkoutDao } from '../../models/WorkoutDao';

export class WorkoutService {
    constructor(private workoutDao:WorkoutDao) {
        this.workoutDao = workoutDao;
    }
    async getWorkouts() {
        return this.workoutDao.getWorkouts();
    }
}
