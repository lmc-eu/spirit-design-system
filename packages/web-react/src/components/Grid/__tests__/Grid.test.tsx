import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Grid from '../Grid';

describe('Grid', () => {
  classNamePrefixProviderTest(Grid, 'Grid');

  stylePropsTest(Grid);

  restPropsTest(Grid, 'div');

  it('should render text children', () => {
    const dom = render(<Grid>Hello World</Grid>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should have desktop cols classname', () => {
    const dom = render(<Grid cols={{ desktop: 3 }} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid--desktop--cols-3');
  });

  it('should have tablet cols classname', () => {
    const dom = render(<Grid cols={{ tablet: 3 }} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid--tablet--cols-3');
  });

  it('should have all cols classnames', () => {
    const dom = render(<Grid cols={{ mobile: 2, tablet: 3, desktop: 4 }} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid--cols-2');
    expect(element).toHaveClass('Grid--tablet--cols-3');
    expect(element).toHaveClass('Grid--desktop--cols-4');
  });

  it('should have cols classname', () => {
    const dom = render(<Grid cols={2} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid--cols-2');
  });
});
