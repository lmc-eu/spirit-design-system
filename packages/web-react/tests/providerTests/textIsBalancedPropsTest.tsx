import { render, waitFor } from '@testing-library/react';
import React, { type ComponentType } from 'react';
import getElement from '../testUtils/getElement';

export const textIsBalancedPropsTest = async (Component: ComponentType<any>, testId?: string) => {
  const dom = render(<Component isTextBalanced />);

  await waitFor(() => {
    const element = getElement(dom, testId);
    expect(element).toHaveClass('text-wrap-balanced');
  });
};
