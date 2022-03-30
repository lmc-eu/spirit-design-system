import { render } from '@testing-library/react';
import React, { ComponentType } from 'react';
import { ClassNamePrefixProvider } from '../../src/context/ClassNamePrefixContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const classNamePrefixProviderTest = (Component: ComponentType<any>, className: string) => {
  it('renders with class name prefix', () => {
    const prefix = 'lmc';
    const dom = render(
      <ClassNamePrefixProvider value={prefix}>
        <Component />
      </ClassNamePrefixProvider>,
    );

    const element = dom.container.firstChild as HTMLElement;
    expect(element).toHaveClass(`${prefix}-${className}`);
  });

  it('renders without class name prefix', () => {
    const dom = render(<Component />);

    const element = dom.container.firstChild as HTMLElement;
    expect(element).toHaveClass(className);
  });
};
