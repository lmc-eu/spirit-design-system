import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import Stack from '../Stack';

describe('Stack', () => {
  classNamePrefixProviderTest(Stack, 'Stack');

  stylePropsTest(Stack);

  restPropsTest(Stack, 'div');

  validHtmlAttributesTest(Stack);

  ariaAttributesTest(Stack);

  elementTypePropsTest(Stack);

  it('should render text children', () => {
    const dom = render(<Stack>Hello World</Stack>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should render element children', () => {
    const dom = render(
      <Stack>
        <span>Child 1</span>
        <span>Child 2</span>
      </Stack>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.children).toHaveLength(2);
    expect(element.children[0].textContent).toBe('Child 1');
    expect(element.children[1].textContent).toBe('Child 2');
  });

  it('should render with spacing', () => {
    const dom = render(<Stack hasSpacing />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Stack--hasSpacing');
  });

  it('should render with custom spacing', () => {
    const dom = render(<Stack spacing="space-1000" />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Stack--hasSpacing');
    expect(element).toHaveStyle({ '--stack-spacing': 'var(--spirit-space-1000)' });
  });

  it('should render with custom spacing for each breakpoint', () => {
    const dom = render(<Stack spacing={{ mobile: 'space-100', tablet: 'space-1000', desktop: 'space-1200' }} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Stack--hasSpacing');
    expect(element).toHaveStyle({ '--stack-spacing': 'var(--spirit-space-100)' });
    expect(element).toHaveStyle({ '--stack-spacing-tablet': 'var(--spirit-space-1000)' });
    expect(element).toHaveStyle({ '--stack-spacing-desktop': 'var(--spirit-space-1200)' });
  });

  it('should render with custom spacing for only one breakpoint', () => {
    const dom = render(<Stack spacing={{ tablet: 'space-1000' }} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Stack--hasSpacing');
    expect(element).toHaveStyle({ '--stack-spacing-tablet': 'var(--spirit-space-1000)' });
    expect(element).not.toHaveStyle({ '--stack-spacing': 'var(--spirit-space-100)' });
    expect(element).not.toHaveStyle({ '--stack-spacing-desktop': 'var(--spirit-space-1200)' });
  });
});
