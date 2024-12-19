import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest, stylePropsTest } from '@local/tests';
import UncontrolledTooltip from '../UncontrolledTooltip';

describe('UncontrolledTooltip', () => {
  stylePropsTest((props: Record<string, unknown>) => {
    return <UncontrolledTooltip {...props} id="uncontrolled-tooltip" data-testid="test-tooltip" />;
  }, 'test-tooltip');

  restPropsTest(UncontrolledTooltip, 'div');

  it('should render text children', () => {
    render(
      <UncontrolledTooltip data-testid="test-tooltip" id="uncontrolled-tooltip">
        Hello World
      </UncontrolledTooltip>,
    );

    expect(screen.getByTestId('test-tooltip')).toHaveTextContent('Hello World');
  });
});
