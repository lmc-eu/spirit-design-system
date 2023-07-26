import { timestamp, month } from '../date';

describe('date', () => {
  jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

  describe('timestamp', () => {
    it('should return the correct timestamp', () => {
      expect(timestamp()).toBe('2020-1-1');
    });
  });

  describe('month', () => {
    it('should return the correct month', () => {
      expect(month()).toBe('January');
    });
  });
});
