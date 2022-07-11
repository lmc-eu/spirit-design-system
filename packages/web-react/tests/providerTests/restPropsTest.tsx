import { render } from '@testing-library/react';
import React, { ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const restPropsTest = (Component: ComponentType<any>, selector: string) => {
  it('should pass rest props to main element', () => {
    const testId = 'testRestProp';
    const dom = render(<Component data-testid={testId} />);

    const element = dom.container.querySelector(selector) as HTMLElement;
    expect(element).toHaveAttribute('data-testid', testId);
  });
};
