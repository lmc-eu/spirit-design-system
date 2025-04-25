import { render, screen } from '@testing-library/react';
import React, { ComponentType } from 'react';
import { getComponentName } from '../testUtils/getComponentName';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ariaAttributesTest = (Component: ComponentType<any>, props: object = {}) => {
  const componentName = getComponentName(Component);

  test(`should render aria-label attribute for ${componentName}`, () => {
    render(<Component {...props} aria-label="Aria Label" />);
    const component = screen.getByLabelText('Aria Label');

    expect(component).toBeInTheDocument();
  });
};
