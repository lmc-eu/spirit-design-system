import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stack from '../Stack';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('Stack', () => {
  it('should have default classname', () => {
    const dom = render(<Stack />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Stack');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Stack />
      </ClassNamePrefixProvider>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('lmc-Stack');
  });

  it('should render text children', () => {
    const dom = render(<Stack>Hello World</Stack>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
