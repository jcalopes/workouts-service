import { createWorkoutDaoImplementationMock } from '../../../../tests/mocks/internal/WorkoutDaoImplementationMock';
import { WorkoutService } from './WorkoutService';
import { createLoggerMock } from '../../../../tests/mocks/internal/LoggerMock';
import { Workout } from '../../../domain/models/Workout';
import { ObjectId } from 'mongodb';

describe('WorkoutService', () => {
  let cut: WorkoutService;

  const {
    mocks: { workoutDaoImplementationMock },
  } = createWorkoutDaoImplementationMock();
  const {
    mocks: { loggerMock },
  } = createLoggerMock();

  beforeEach(() => {
    jest.clearAllMocks();
    cut = new WorkoutService(workoutDaoImplementationMock, loggerMock);
  });

  describe('get workouts', () => {
    it('should call workoutDao.getWorkouts', async () => {
      await cut.getWorkouts();
      expect(workoutDaoImplementationMock.getWorkouts).toHaveBeenCalledTimes(1);
    });

    describe('could not retrieve workouts data', () => {
      const errorMessage = 'Failed to connect to database.';
      beforeEach(() => {
        workoutDaoImplementationMock.getWorkouts.mockRejectedValueOnce(
          new Error(errorMessage),
        );
      });

      it('should log the error', async () => {
        await expect(cut.getWorkouts()).rejects.toThrow(errorMessage);
        expect(loggerMock.error).toHaveBeenCalledWith(
          `WorkoutService:: getWorkouts: Error: ${errorMessage}`,
        );
      });
    });
  });

  describe('createWorkout', () => {
    const objectId = new ObjectId();
    const workout: Workout = {
      _id: objectId,
      name: 'Monday Workout',
      description: 'Leg Day',
      category: 'Legs',
      date: new Date(),
    };

    it('should call workoutDao.createWorkout', async () => {
      await cut.createWorkout(workout);
      expect(workoutDaoImplementationMock.createWorkout).toHaveBeenCalledWith(
        workout,
      );
    });

    describe('could not create workouts data', () => {
      const errorMessage = 'Failed to save the data.';
      beforeEach(() => {
        workoutDaoImplementationMock.createWorkout.mockRejectedValueOnce(
          new Error(errorMessage),
        );
      });

      it('should throw an error', async () => {
        await expect(cut.createWorkout(workout)).rejects.toThrow(errorMessage);
        expect(loggerMock.error).toHaveBeenCalledWith(
          `WorkoutService:: createWorkout: Error: ${errorMessage}`,
        );
      });
    });
  });

  describe('getWorkoutId', () => {
    const workoutId = '110142024';
    it('should call workoutDao.getWorkout', async () => {
      await cut.getWorkout(workoutId);
      expect(workoutDaoImplementationMock.getWorkout).toHaveBeenCalledWith(
        workoutId,
      );
    });

    describe('could not get workout by id', () => {
      const errorMessage = 'Failed to get workout Id.';
      beforeEach(() => {
        workoutDaoImplementationMock.getWorkout.mockRejectedValueOnce(
          new Error(errorMessage),
        );
      });

      it('should throw an error', async () => {
        await expect(cut.getWorkout(workoutId)).rejects.toThrow(errorMessage);
        expect(loggerMock.error).toHaveBeenCalledWith(
          `WorkoutService:: getWorkoutId: Error: ${errorMessage}`,
        );
      });
    });
  });

  describe('deleteWorkout', () => {
    const workoutId = '110142024';
    it('should call workoutDao.deleteWorkout', async () => {
      await cut.deleteWorkout(workoutId);
      expect(workoutDaoImplementationMock.deleteWorkout).toHaveBeenCalledWith(
        workoutId,
      );
    });

    describe('could not get delete an workout Id', () => {
      const errorMessage = 'Failed to delete workout Id.';
      beforeEach(() => {
        workoutDaoImplementationMock.deleteWorkout.mockRejectedValueOnce(
          new Error(errorMessage),
        );
      });

      it('should throw an error', async () => {
        await expect(cut.deleteWorkout(workoutId)).rejects.toThrow(
          errorMessage,
        );
        expect(loggerMock.error).toHaveBeenCalledWith(
          `WorkoutService:: deleteWorkouts: Error: ${errorMessage}`,
        );
      });
    });
  });
});
