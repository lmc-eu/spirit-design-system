import { waitForTransitionEnd } from '../transitions';

describe('waitForTransitionEnd', () => {
  let mockElement: HTMLElement;
  let mockGetComputedStyle: jest.SpyInstance;

  beforeEach(() => {
    mockElement = document.createElement('div');
    mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should resolve immediately when element has no transition', async () => {
    const mockStyle = {
      transitionDuration: '0s',
      transitionDelay: '0s',
    };
    mockGetComputedStyle.mockReturnValue(mockStyle as CSSStyleDeclaration);

    const startTime = Date.now();
    await waitForTransitionEnd(mockElement);
    const endTime = Date.now();

    // Should resolve almost immediately (within 10ms)
    expect(endTime - startTime).toBeLessThan(10);
  });

  it('should resolve when transitionend event fires', async () => {
    const mockStyle = {
      transitionDuration: '0.3s',
      transitionDelay: '0.1s',
    };
    mockGetComputedStyle.mockReturnValue(mockStyle as CSSStyleDeclaration);

    const promise = waitForTransitionEnd(mockElement);

    // Simulate transitionend event
    setTimeout(() => {
      mockElement.dispatchEvent(new Event('transitionend'));
    }, 10);

    await promise;
  });

  it('should resolve via fallback timeout if transitionend never fires', async () => {
    const mockStyle = {
      transitionDuration: '0.1s',
      transitionDelay: '0.05s',
    };
    mockGetComputedStyle.mockReturnValue(mockStyle as CSSStyleDeclaration);

    const startTime = Date.now();
    await waitForTransitionEnd(mockElement);
    const endTime = Date.now();

    // Should resolve after the calculated timeout (150ms + 50ms buffer = 200ms)
    // Allow some tolerance for test execution time
    expect(endTime - startTime).toBeGreaterThanOrEqual(150);
    expect(endTime - startTime).toBeLessThan(300);
  });

  it('should handle elements with only transition duration', async () => {
    const mockStyle = {
      transitionDuration: '0.2s',
      transitionDelay: '0s',
    };
    mockGetComputedStyle.mockReturnValue(mockStyle as CSSStyleDeclaration);

    const promise = waitForTransitionEnd(mockElement);

    setTimeout(() => {
      mockElement.dispatchEvent(new Event('transitionend'));
    }, 10);

    await promise;
  });

  it('should handle elements with only transition delay', async () => {
    const mockStyle = {
      transitionDuration: '0s',
      transitionDelay: '0.1s',
    };
    mockGetComputedStyle.mockReturnValue(mockStyle as CSSStyleDeclaration);

    const promise = waitForTransitionEnd(mockElement);

    setTimeout(() => {
      mockElement.dispatchEvent(new Event('transitionend'));
    }, 10);

    await promise;
  });

  it('should handle invalid transition values gracefully', async () => {
    const mockStyle = {
      transitionDuration: 'invalid',
      transitionDelay: 'also-invalid',
    };
    mockGetComputedStyle.mockReturnValue(mockStyle as CSSStyleDeclaration);

    const startTime = Date.now();
    await waitForTransitionEnd(mockElement);
    const endTime = Date.now();

    // Should resolve immediately when values are invalid
    expect(endTime - startTime).toBeLessThan(10);
  });

  it('should remove event listener after transitionend fires', async () => {
    const mockStyle = {
      transitionDuration: '0.1s',
      transitionDelay: '0s',
    };
    mockGetComputedStyle.mockReturnValue(mockStyle as CSSStyleDeclaration);

    const removeEventListenerSpy = jest.spyOn(mockElement, 'removeEventListener');

    const promise = waitForTransitionEnd(mockElement);

    setTimeout(() => {
      mockElement.dispatchEvent(new Event('transitionend'));
    }, 10);

    await promise;

    expect(removeEventListenerSpy).toHaveBeenCalledWith('transitionend', expect.any(Function));
  });

  it('should handle multiple rapid transitionend events', async () => {
    const mockStyle = {
      transitionDuration: '0.1s',
      transitionDelay: '0s',
    };
    mockGetComputedStyle.mockReturnValue(mockStyle as CSSStyleDeclaration);

    const promise = waitForTransitionEnd(mockElement);

    // Fire multiple transitionend events
    setTimeout(() => {
      mockElement.dispatchEvent(new Event('transitionend'));
      mockElement.dispatchEvent(new Event('transitionend'));
      mockElement.dispatchEvent(new Event('transitionend'));
    }, 10);

    await promise;
  });

  it('should calculate timeout correctly for complex transitions', async () => {
    const mockStyle = {
      transitionDuration: '0.5s',
      transitionDelay: '0.2s',
    };
    mockGetComputedStyle.mockReturnValue(mockStyle as CSSStyleDeclaration);

    const startTime = Date.now();
    await waitForTransitionEnd(mockElement);
    const endTime = Date.now();

    // Should resolve after (500ms + 200ms) * 1000 + 50ms = 700.05ms
    // But since we're not firing transitionend, it should use the fallback
    expect(endTime - startTime).toBeGreaterThanOrEqual(700);
    expect(endTime - startTime).toBeLessThan(800);
  });
});
