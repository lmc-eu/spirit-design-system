import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonLink from '../ButtonLink';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('ButtonLink', () => {
  it('should have default classname', () => {
    const { container } = render(<ButtonLink />);

    expect(container.querySelector('a')).toHaveClass('Button');
    expect(container.querySelector('a')).toHaveClass('Button--primary');
  });

  it('should have disabled classname', () => {
    const { container } = render(<ButtonLink disabled />);

    expect(container.querySelector('a')).toHaveClass('Button');
    expect(container.querySelector('a')).toHaveClass('Button--disabled');
  });

  it('should have classname with lmc prefix', () => {
    const { container } = render(
      <ClassNamePrefixProvider value="lmc">
        <ButtonLink disabled block />
      </ClassNamePrefixProvider>,
    );

    expect(container.querySelector('a')).toHaveClass('lmc-Button');
    expect(container.querySelector('a')).toHaveClass('lmc-Button--primary');
    expect(container.querySelector('a')).toHaveClass('lmc-Button--block');
    expect(container.querySelector('a')).toHaveClass('lmc-Button--disabled');
  });

  it('should render text children', () => {
    const dom = render(<ButtonLink>Hello World</ButtonLink>);

    expect(dom.container.querySelector('a').textContent).toBe('Hello World');
  });

  it('should not have default type attribute', () => {
    const { container } = render(<ButtonLink />);

    expect(container.querySelector('a')).not.toHaveAttribute('type');
  });
});
