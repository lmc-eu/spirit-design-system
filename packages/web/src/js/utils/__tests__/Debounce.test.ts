import { debounce } from '../Debounce';

const DEBOUNCE_DELAY_MS = 100;

describe('Behavior: Debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should call the given callback function only after the debounce delay has passed', () => {
    const callback = jest.fn();
    const debouncedFunction = debounce(callback, DEBOUNCE_DELAY_MS);

    debouncedFunction('test argument');

    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test argument');
  });
});
