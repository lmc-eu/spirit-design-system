import { render, RenderResult } from '@testing-library/react';
import React, { ComponentType } from 'react';
import { ClassNamePrefixProvider } from '../../src/context/ClassNamePrefixContext';

const getElement = (dom: RenderResult, testId: string | undefined) =>
  testId ? (dom.getByTestId(testId) as HTMLElement) : (dom.container.firstChild as HTMLElement);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const classNamePrefixProviderTest = (Component: ComponentType<any>, className: string, testId?: string) => {
  it('renders with class name prefix', () => {
    const prefix = 'lmc';
    const dom = render(
      <ClassNamePrefixProvider value={prefix}>
        <Component />
      </ClassNamePrefixProvider>,
    );

    const element = getElement(dom, testId);
    expect(element).toHaveClass(`${prefix}-${className}`);
  });

  it('renders without class name prefix', () => {
    const dom = render(<Component />);

    const element = getElement(dom, testId);
    expect(element).toHaveClass(className);
  });
};
