import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React, { useRef } from 'react';
import { useResizeHeight } from '../useResizeHeight';

jest.spyOn(window, 'requestAnimationFrame').mockImplementation(() => {
  return 0;
});

const TestComponent = () => {
  const ref = useRef(null);
  const height = useResizeHeight(ref);

  return <div ref={ref}>{height}</div>;
};

const resize = (height: number) => {
  global.ResizeObserver = jest.fn().mockImplementation((cb) => {
    cb([{ contentRect: { height } }]);

    return { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn() };
  });

  const { container } = render(<TestComponent />);

  return container.textContent;
};

describe('useResizeHeight', () => {
  it('should return simulated height', () => {
    expect(resize(100)).toBe('100px');
    expect(resize(200)).toBe('200px');
  });
});
