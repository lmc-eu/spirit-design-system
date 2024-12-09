import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { Button } from '../../Button';
import Collapse from '../Collapse';

// @TODO: Missing test for collapsibleToBreakpoint

describe('Collapse', () => {
  classNamePrefixProviderTest(Collapse, 'Collapse');

  stylePropsTest(Collapse);

  restPropsTest(Collapse, 'div');

  it('should render text children', () => {
    render(
      <Collapse id="collapse" isOpen data-testid="test">
        Hello World
      </Collapse>,
    );

    const element = screen.getByTestId('test');
    expect(element).toHaveTextContent('Hello World');
    expect(element).toHaveClass('is-open');
  });

  it('should open collapse', () => {
    const RenderCollapse = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Button type="button" data-testid="test-button" onClick={() => setIsOpen(!isOpen)}>
            Toggle Collapse
          </Button>
          <Collapse id="collapse" isOpen={isOpen} data-testid="test">
            Hello World
          </Collapse>
        </>
      );
    };

    render(<RenderCollapse />);

    const toggleButton = screen.getByTestId('test-button');
    const collapseElement = screen.getByTestId('test');

    expect(collapseElement).not.toHaveClass('is-open');

    fireEvent.click(toggleButton);

    expect(collapseElement).toHaveClass('is-open');
  });

  it('should have correct html element', () => {
    render(
      <Collapse id="collapse" elementType="section" isOpen data-testid="test">
        Hello World
      </Collapse>,
    );

    const element = screen.getByTestId('test');

    expect(element.tagName).toBe('SECTION');
  });

  it('should respect transitionDuration prop', async () => {
    jest.useFakeTimers();

    const RenderCollapse = ({ duration }: { duration: number }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Button type="button" data-testid="test-button" onClick={() => setIsOpen(!isOpen)}>
            Toggle Collapse
          </Button>
          <Collapse id="collapse" isOpen={isOpen} transitionDuration={duration} data-testid="test">
            Hello World
          </Collapse>
        </>
      );
    };

    const transitionDuration = 250;

    render(<RenderCollapse duration={transitionDuration} />);

    const toggleButton = screen.getByTestId('test-button');
    const collapseElement = screen.getByTestId('test');

    expect(collapseElement).not.toHaveClass('is-open');

    fireEvent.click(toggleButton);

    act(() => {
      jest.advanceTimersByTime(transitionDuration - 1);
    });

    expect(collapseElement).toHaveClass('is-transitioning');

    act(() => {
      jest.advanceTimersByTime(1);
    });

    expect(collapseElement).not.toHaveClass('is-transitioning');
    expect(collapseElement).toHaveClass('is-open');

    jest.useRealTimers();
  });
});
