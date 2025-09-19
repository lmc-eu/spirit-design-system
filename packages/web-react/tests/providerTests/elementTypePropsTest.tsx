import { render, screen } from '@testing-library/react';
import React, { type ComponentType } from 'react';

/**
 * Tests whether a given React component renders an element with the expected tag name.
 *
 * @param {ComponentType<any>} Component - The React component to test.
 * @param {string} element - default: 'span'; the expected tag name of the rendered element.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const elementTypePropsTest = (Component: ComponentType<any>, element: string = 'span') => {
  it("should set the element type value as a component's root element", () => {
    render(<Component data-testid="element-test" elementType={element} />);

    const screenElement = screen.getAllByTestId('element-test');

    expect(screenElement[0].localName).toBe(element);
  });
};
