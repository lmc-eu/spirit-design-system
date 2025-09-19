import { renderHook } from '@testing-library/react';
import { type MutableRefObject } from 'react';
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

  it('should not call the callback when the click starts inside the ref element but ends outside', () => {
    const callback = jest.fn();
    const containerRef = { current: document.createElement('div') } as MutableRefObject<HTMLElement | null>;

    renderHook(() => useClickOutside({ ref: containerRef, callback }));

    const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true });
    const mouseUpEvent = new MouseEvent('mouseup', { bubbles: true });

    const insideElement = document.createElement('div');
    const outsideElement = document.createElement('div');
    document.body.appendChild(insideElement);
    document.body.appendChild(outsideElement);

    containerRef.current!.appendChild(insideElement);

    insideElement.dispatchEvent(mouseDownEvent);

    outsideElement.dispatchEvent(mouseUpEvent);

    expect(callback).not.toHaveBeenCalled();
  });
});
