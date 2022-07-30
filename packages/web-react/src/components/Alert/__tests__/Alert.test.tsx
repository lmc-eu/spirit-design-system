import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { AlertColor } from '../../../types';
import Alert from '../Alert';

describe('Alert', () => {
  classNamePrefixProviderTest(Alert, 'Alert');

  stylePropsTest(Alert);

  restPropsTest(Alert, 'div');

  it('should have default classname', () => {
    const dom = render(<Alert />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Alert--success');
  });

  it('should render text children', () => {
    const dom = render(<Alert>Hello World</Alert>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should have alert role', () => {
    const dom = render(<Alert>Hello World</Alert>);

    const element = dom.getByRole('alert') as HTMLElement;
    expect(element).toBeInTheDocument();
  });

  it.each([['success'], ['danger'], ['informative']])('should render color %s', (color) => {
    const dom = render(<Alert color={color as AlertColor}>Hello World</Alert>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass(`Alert--${color}`);
  });
});
