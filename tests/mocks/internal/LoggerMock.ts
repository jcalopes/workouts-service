import { mockDeep } from 'jest-mock-extended';
import { Logger } from 'winston';

export const createLoggerMock = () => {
  const loggerMock = mockDeep<Logger>();
  return {
    mocks: {
      loggerMock,
    },
  };
};
