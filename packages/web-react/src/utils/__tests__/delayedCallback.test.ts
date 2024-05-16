import { delayedCallback } from '../delayedCallback';

describe('delayedCallback', () => {
  it('should call the callback after the specified interval', () => {
    jest.useFakeTimers();

    const callback = jest.fn();
    const interval = 1000; // 1 second

    delayedCallback(callback, interval);

    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
  });
});
