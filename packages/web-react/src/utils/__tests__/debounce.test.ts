import { debounce } from '../debounce';

describe('#debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should debounce the callback function', () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 200);

    debouncedCallback('test');

    // At this point, the callback should not have been called yet
    expect(callback).not.toHaveBeenCalled();

    // Fast-forward time by 200ms
    jest.advanceTimersByTime(200);

    // Now the callback should have been called only once
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should execute the callback after throttling is over', () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 200);

    debouncedCallback('test');
    debouncedCallback('test');
    debouncedCallback('test');

    // At this point, the callback should not have been called yet
    expect(callback).not.toHaveBeenCalled();

    // Fast-forward time by 200ms
    jest.advanceTimersByTime(200);

    // The callback should have been called once
    expect(callback).toHaveBeenCalledTimes(1);

    debouncedCallback('test');

    // Fast-forward time by 400ms
    jest.advanceTimersByTime(200);

    // The callback should have been called twice
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
