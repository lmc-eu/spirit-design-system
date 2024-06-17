import { renderHook } from '@testing-library/react';
import { MutableRefObject } from 'react';
import { useClickOutside } from '../useClickOutside';

describe('useClickOutside', () => {
  it('should not call the callback when a click event occurs inside the ref element', () => {
    const callback = jest.fn();
    const containerRef = { current: document.createElement('div') } as MutableRefObject<HTMLElement | null>;

    renderHook(() => useClickOutside({ ref: containerRef, callback }));

    const clickEvent = new MouseEvent('click', { bubbles: true });
    const insideElement = document.createElement('div');
    document.body.appendChild(insideElement);

    containerRef.current!.appendChild(insideElement);
    insideElement.dispatchEvent(clickEvent);

    expect(callback).not.toHaveBeenCalled();
  });
});
