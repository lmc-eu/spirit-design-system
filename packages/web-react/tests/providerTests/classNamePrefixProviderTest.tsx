import { render, waitFor } from '@testing-library/react';
import React, { ComponentType } from 'react';
import { ClassNamePrefixProvider } from '../../src/context/ClassNamePrefixContext';
import getElement from '../testUtils/getElement';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const classNamePrefixProviderTest = (Component: ComponentType<any>, className: string, testId?: string) => {
  it('renders with class name prefix', async () => {
    const prefix = 'lmc';
    const dom = render(
      <ClassNamePrefixProvider value={prefix}>
        <Component />
      </ClassNamePrefixProvider>,
    );

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element).toHaveClass(`${prefix}-${className}`);
    });
  });

  it('renders without class name prefix', async () => {
    const dom = render(<Component />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element).toHaveClass(className);
    });
  });
};
