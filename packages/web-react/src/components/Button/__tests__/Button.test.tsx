import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  componentButtonColorPropsTest,
  elementTypePropsTest,
  emotionColorPropsTest,
  loadingPropsTest,
  restPropsTest,
  sizePropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import Button from '../Button';

jest.mock('../../../hooks/useIcon');

describe('Button', () => {
  classNamePrefixProviderTest(Button, 'Button');

  componentButtonColorPropsTest(Button, 'Button--');

  emotionColorPropsTest(Button, 'Button--');

  sizePropsTest(Button);

  loadingPropsTest(Button, 'button');

  stylePropsTest(Button);

  restPropsTest(Button, 'button');

  validHtmlAttributesTest(Button);

  ariaAttributesTest(Button);

  elementTypePropsTest(Button);

  it('should have default classname', () => {
    const dom = render(<Button />);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element).toHaveClass('Button--primary');
  });

  it('should render text children', () => {
    const dom = render(<Button>Hello World</Button>);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should render with custom spacing', () => {
    const dom = render(<Button spacing="space-600">Button</Button>);

    const element = dom.container.querySelector('button') as HTMLElement;
    expect(element).toHaveStyle({ '--button-spacing': 'var(--spirit-space-600)' });
  });

  it('should render with custom spacing for each breakpoint', () => {
    const dom = render(
      <Button spacing={{ mobile: 'space-100', tablet: 'space-1000', desktop: 'space-1200' }}>Button</Button>,
    );

    const element = dom.container.querySelector('button') as HTMLElement;

    expect(element).toHaveStyle({ '--button-spacing': 'var(--spirit-space-100)' });
    expect(element).toHaveStyle({ '--button-spacing-tablet': 'var(--spirit-space-1000)' });
    expect(element).toHaveStyle({ '--button-spacing-desktop': 'var(--spirit-space-1200)' });
  });
});
