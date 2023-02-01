import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import UncontrolledTooltip from '../UncontrolledTooltip';

describe('UncontrolledTooltip', () => {
  classNamePrefixProviderTest(UncontrolledTooltip, 'Tooltip');

  stylePropsTest((props: Record<string, unknown>) => {
    return <UncontrolledTooltip {...props} data-testid="test-tooltip" />;
  }, 'test-tooltip');

  restPropsTest(UncontrolledTooltip, '.Tooltip');

  it('should render text children', () => {
    const dom = render(<UncontrolledTooltip>Hello World</UncontrolledTooltip>);
    const element = dom.container.querySelector('.Tooltip') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
