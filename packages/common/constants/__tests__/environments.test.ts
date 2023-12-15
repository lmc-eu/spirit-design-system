import { isTesting } from '../environments';

describe('environments', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    // Most important - it clears the cache
    jest.resetModules();
    // Make a copy
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    // Restore old environment
    process.env = OLD_ENV;
  });

  describe('isTesting', () => {
    it('should return true when NODE_ENV is set to `testing`', () => {
      process.env.NODE_ENV = 'testing';

      expect(isTesting()).toBeTruthy();
    });

    it('should return false when NODE_ENV is not set to `testing`', () => {
      process.env.NODE_ENV = 'production';

      expect(isTesting()).toBeFalsy();
    });
  });
});
