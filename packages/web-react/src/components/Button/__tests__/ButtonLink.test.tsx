import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonLink from '../ButtonLink';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('ButtonLink', () => {
  it('should have default classname', () => {
    const { container } = render(<ButtonLink />);

    const element = container.querySelector('a') as HTMLElement;
    expect(element).toHaveClass('Button');
    expect(element).toHaveClass('Button--primary');
  });

  it('should have disabled classname', () => {
    const { container } = render(<ButtonLink isDisabled />);

    const element = container.querySelector('a') as HTMLElement;
    expect(element).toHaveClass('Button');
    expect(element).toHaveClass('Button--disabled');
  });

  it('should have classname with lmc prefix', () => {
    const { container } = render(
      <ClassNamePrefixProvider value="lmc">
        <ButtonLink isDisabled isBlock />
      </ClassNamePrefixProvider>,
    );

    const element = container.querySelector('a') as HTMLElement;
    expect(element).toHaveClass('lmc-Button');
    expect(element).toHaveClass('lmc-Button--primary');
    expect(element).toHaveClass('lmc-Button--block');
    expect(element).toHaveClass('lmc-Button--disabled');
  });

  it('should render text children', () => {
    const dom = render(<ButtonLink>Hello World</ButtonLink>);

    const element = dom.container.querySelector('a') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should not have default type attribute', () => {
    const { container } = render(<ButtonLink />);

    const element = container.querySelector('a') as HTMLElement;
    expect(element).not.toHaveAttribute('type');
  });
});
