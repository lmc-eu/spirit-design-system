import { render, screen } from '@testing-library/react';
import React, { cloneElement, ComponentType } from 'react';

export const requiredPropsTest = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>,
  role: string,
  attribute: string,
  attributeValue: string,
) => {
  it(`should have correct ${attribute}`, () => {
    render(cloneElement(<Component />, { [attribute]: attributeValue }));

    const element = screen.getByRole(role);

    expect(element).toHaveAttribute(attribute, attributeValue);
  });
};
