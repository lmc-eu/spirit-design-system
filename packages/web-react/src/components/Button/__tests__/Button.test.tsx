import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('Button', () => {
  it('should have default classname', () => {
    const dom = render(<Button />);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element).toHaveClass('Button');
    expect(element).toHaveClass('Button--primary');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Button />
      </ClassNamePrefixProvider>,
    );

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element).toHaveClass('lmc-Button');
    expect(element).toHaveClass('lmc-Button--primary');
  });

  it('should render text children', () => {
    const dom = render(<Button>Hello World</Button>);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
