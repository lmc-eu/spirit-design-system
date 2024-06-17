import { act, renderHook } from '@testing-library/react';
import { MutableRefObject } from 'react';
import { useScrollControl } from '../useScrollControl';

describe('useScrollControl', () => {
  const createMockRef = (isOpen: boolean) => ({
    current: {
      open: isOpen,
    },
  });

  it('should disable scroll when isOpen is true', () => {
    const mockRef = createMockRef(true) as MutableRefObject<HTMLDialogElement | null>;

    act(() => {
      renderHook(() => useScrollControl(mockRef, true));
    });

    expect(document.body.classList.contains('is-scrolling-disabled')).toBe(true);
    expect(document.body.style.paddingRight).toMatch(/\d+px/);
  });

  it('should enable scroll when isOpen is false', () => {
    const mockRef = createMockRef(false) as MutableRefObject<HTMLDialogElement | null>;

    act(() => {
      renderHook(() => useScrollControl(mockRef, true));
    });

    act(() => {
      renderHook(() => useScrollControl(mockRef, false));
    });

    expect(document.body.classList.contains('is-scrolling-disabled')).toBe(false);
  });

  it('should clean up on unmount', () => {
    const mockRef = createMockRef(true) as MutableRefObject<HTMLDialogElement | null>;

    const { unmount } = renderHook(() => useScrollControl(mockRef, true));

    unmount();

    expect(document.body.classList.contains('is-scrolling-disabled')).toBe(false);
  });
});
