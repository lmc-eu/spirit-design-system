import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stack from '../Stack';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('Stack', () => {
  it('should have default classname', () => {
    const dom = render(<Stack />);

    expect(dom.container.querySelector('div')).toHaveClass('Stack');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Stack />
      </ClassNamePrefixProvider>,
    );

    expect(dom.container.querySelector('div')).toHaveClass('lmc-Stack');
  });

  it('should render text children', () => {
    const dom = render(<Stack>Hello World</Stack>);

    expect(dom.container.querySelector('div').textContent).toBe('Hello World');
  });
});
