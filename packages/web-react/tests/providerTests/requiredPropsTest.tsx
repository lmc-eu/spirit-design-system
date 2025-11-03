import { render, screen } from '@testing-library/react';
import React, { type ComponentType, cloneElement } from 'react';

export const requiredPropsTest = (
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
