import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import GridSpan from '../GridSpan';

describe('Grid', () => {
  classNamePrefixProviderTest(GridSpan, 'Grid__span');

  stylePropsTest(GridSpan);

  restPropsTest(GridSpan, 'div');

  it('should render text children', () => {
    const dom = render(<GridSpan>Hello World</GridSpan>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should have desktop over classname', () => {
    const dom = render(<GridSpan desktop={4} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid__span--desktop--over-4');
  });

  it('should have tablet over classname', () => {
    const dom = render(<GridSpan tablet={4} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid__span--tablet--over-4');
  });

  it('should have all over classnames', () => {
    const dom = render(<GridSpan over={2} tablet={4} desktop={6} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid__span--over-2');
    expect(element).toHaveClass('Grid__span--tablet--over-4');
    expect(element).toHaveClass('Grid__span--desktop--over-6');
  });

  it('should have over classname', () => {
    const dom = render(<GridSpan over={2} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid__span--over-2');
  });
});
