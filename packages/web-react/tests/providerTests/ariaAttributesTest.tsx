import { render, screen } from '@testing-library/react';
import React, { type ComponentType } from 'react';
import { getComponentName } from '../testUtils/getComponentName';

export const ariaAttributesTest = (Component: ComponentType<any>, props: object = {}) => {
  const componentName = getComponentName(Component);

  test(`should render aria-label attribute for ${componentName}`, () => {
    render(<Component {...props} aria-label="Aria Label" />);
    const component = screen.getByLabelText('Aria Label');

    expect(component).toBeInTheDocument();
  });
};
