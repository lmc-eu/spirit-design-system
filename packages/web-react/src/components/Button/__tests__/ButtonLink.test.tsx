import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import ButtonLink from '../ButtonLink';

describe('ButtonLink', () => {
  classNamePrefixProviderTest(ButtonLink, 'Button');

  stylePropsTest(ButtonLink);

  restPropsTest(ButtonLink, 'a');

  it('should have default classname', () => {
    const { container } = render(<ButtonLink />);

    const element = container.querySelector('a') as HTMLElement;
    expect(element).toHaveClass('Button--primary');
  });

  it('should have disabled classname', () => {
    const { container } = render(<ButtonLink isDisabled />);

    const element = container.querySelector('a') as HTMLElement;
    expect(element).toHaveClass('Button');
    expect(element).toHaveClass('Button--disabled');
  });

  it('should have block classname', () => {
    const { container } = render(<ButtonLink isBlock />);

    const element = container.querySelector('a') as HTMLElement;
    expect(element).toHaveClass('Button');
    expect(element).toHaveClass('Button--block');
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
