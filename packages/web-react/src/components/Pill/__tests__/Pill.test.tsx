import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { PillColor } from '../../../types';
import Pill from '../Pill';

describe('Pill', () => {
  classNamePrefixProviderTest(Pill, 'Pill');

  stylePropsTest(Pill);

  restPropsTest(Pill, 'span');

  it('should have default classname', () => {
    const dom = render(<Pill />);

    const element = dom.container.querySelector('span') as HTMLElement;
    expect(element).toHaveClass('Pill--selected');
  });

  it('should render text children', () => {
    const dom = render(<Pill>3</Pill>);

    const element = dom.container.querySelector('span') as HTMLElement;
    expect(element.textContent).toBe('3');
  });

  it.each([['selected'], ['danger'], ['informative'], ['success'], ['warning']])('should render color %s', (color) => {
    const dom = render(<Pill color={color as PillColor}>333</Pill>);

    const element = dom.container.querySelector('span') as HTMLElement;
    expect(element).toHaveClass(`Pill--${color}`);
  });
});
