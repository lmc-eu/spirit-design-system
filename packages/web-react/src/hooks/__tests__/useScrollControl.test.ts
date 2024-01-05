import { act, renderHook } from '@testing-library/react-hooks';
import { MutableRefObject } from 'react';
import { useScrollControl } from '../useScrollControl';

describe('useScrollControl', () => {
  let originalScrollTo: typeof window.scrollTo;

  const createMockRef = (isOpen: boolean) => ({
    current: {
      open: isOpen,
    },
  });

  beforeEach(() => {
    originalScrollTo = window.scrollTo;
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    window.scrollTo = originalScrollTo;
  });

  it('should disable scroll when isOpen is true', () => {
    const mockRef = createMockRef(true) as MutableRefObject<HTMLDialogElement | null>;

    act(() => {
      renderHook(() => useScrollControl(mockRef, true));
    });

    expect(document.body.classList.contains('is-scrolling-disabled')).toBe(true);
    expect(document.body.style.top).toMatch(/-\d+px/);
    expect(document.body.style.paddingRight).toMatch(/\d+px/);
  });

  it('should enable scroll when isOpen is false', () => {
    const mockRef = createMockRef(false) as MutableRefObject<HTMLDialogElement | null>;

    const scrollToSpy = jest.spyOn(window, 'scrollTo');

    act(() => {
      renderHook(() => useScrollControl(mockRef, true));
    });

    act(() => {
      renderHook(() => useScrollControl(mockRef, false));
    });

    expect(scrollToSpy).toHaveBeenCalledWith(0, -0);
    expect(document.body.classList.contains('is-scrolling-disabled')).toBe(false);
    expect(document.body.style.top).toBe('');
  });
});
