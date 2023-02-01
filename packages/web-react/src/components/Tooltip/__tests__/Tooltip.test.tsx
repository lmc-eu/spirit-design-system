import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  classNamePrefixProviderTest(Tooltip, 'Tooltip');

  stylePropsTest((props: Record<string, unknown>) => {
    const onClose = () => null;

    return <Tooltip open={false} onClose={onClose} {...props} data-testid="test-tooltip" />;
  }, 'test-tooltip');

  restPropsTest(Tooltip, '.Tooltip');

  it('should render text children', () => {
    const onClose = () => null;
    const dom = render(
      <Tooltip open={false} onClose={onClose}>
        Hello World
      </Tooltip>,
    );
    const element = dom.container.querySelector('.Tooltip') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
