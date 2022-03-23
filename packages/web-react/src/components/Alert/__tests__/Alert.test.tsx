import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';
import { AlertColor } from '../../../types';
import Alert from '../Alert';

describe('Alert', () => {
  it('should have default classname', () => {
    const dom = render(<Alert />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Alert');
    expect(element).toHaveClass('Alert--success');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Alert />
      </ClassNamePrefixProvider>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('lmc-Alert');
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

  it.each([['success'], ['danger']])('should render color %s', (color) => {
    const dom = render(<Alert color={color as AlertColor}>Hello World</Alert>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass(`Alert--${color}`);
  });
});
