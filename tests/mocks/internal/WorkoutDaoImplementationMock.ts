import { mockDeep } from 'jest-mock-extended';
import { WorkoutDaoImpl } from '../../../src/domain/models/WorkoutDaoImpl';

export const createWorkoutDaoImplementationMock = () => {
  const workoutDaoImplementationMock = mockDeep<WorkoutDaoImpl>();

  return {
    mocks: {
      workoutDaoImplementationMock,
    },
  };
};
