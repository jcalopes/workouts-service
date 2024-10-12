import { createWorkoutDaoImplementationMock } from '../../../tests/mocks/internal/WorkoutDaoImplementationMock';
import { WorkoutService } from './WorkoutService';
import { createLoggerMock } from '../../../tests/mocks/internal/LoggerMock';

describe('WorkoutService', () => {
  let cut: WorkoutService;

  const { mocks: {workoutDaoImplementationMock}} = createWorkoutDaoImplementationMock();
  const { mocks: {loggerMock}} = createLoggerMock();

    beforeEach(() => {
        jest.clearAllMocks();

        cut = new WorkoutService(workoutDaoImplementationMock, loggerMock);
    });

    describe('getWorkouts', () => {
        it('should call workoutDao.getWorkouts', async () => {
            await cut.getWorkouts();
            expect(workoutDaoImplementationMock.getWorkouts).toHaveBeenCalledTimes(1);
        });
    });
});


