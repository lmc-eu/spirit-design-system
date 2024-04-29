import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import UncontrolledTooltip from '../UncontrolledTooltip';

describe('UncontrolledTooltip', () => {
  stylePropsTest((props: Record<string, unknown>) => {
    return <UncontrolledTooltip {...props} id="uncontrolled-tooltip" data-testid="test-tooltip" />;
  }, 'test-tooltip');

  restPropsTest(UncontrolledTooltip, 'div');

  it('should render text children', () => {
    const dom = render(<UncontrolledTooltip id="uncontrolled-tooltip">Hello World</UncontrolledTooltip>);
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
