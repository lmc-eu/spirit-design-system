/* eslint-disable jest/no-commented-out-tests */
/**
 * Disabled because we are unable to simulate and subsequently test the correct behavior of the useResizeObserver hook.
 * But we do not want to throw away the know-how about testing that hook in code yet.
 *
 * More information https://jira.lmc.cz/browse/DS-549
 *
 * @todo either we make this test work in https://jira.lmc.cz/browse/DS-549 or replaced it with visual test
 */

/*
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import { useResizeHeight } from '../useResizeHeight';

jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
jest.mock('@juggle/resize-observer');

const TestComponent = () => {
  const ref = React.useRef(null);
  const height = useResizeHeight(ref);

  return <div ref={ref}>{height}</div>;
};

const resize = (height: number) => {
  ResizeObserver.mockImplementation((cb) => {
    cb([{ contentRect: { height } }]);

    return { observe: jest.fn, disconnect: jest.fn, unobserve: jest.fn };
  });

  const { container } = render(<TestComponent />);

  return container.textContent;
};

describe.skip('useResizeHeight', () => {
  it('should return simulated height', () => {
    expect(resize(100)).toBe('100px');
    expect(resize(200)).toBe('200px');
  });
});
*/

// eslint-disable-next-line jest/no-disabled-tests, jest/expect-expect, @typescript-eslint/no-empty-function
it.skip('skip', () => {});
