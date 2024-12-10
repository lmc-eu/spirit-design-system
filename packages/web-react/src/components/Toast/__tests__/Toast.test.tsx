import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import Toast from '../Toast';

describe('Toast', () => {
  classNamePrefixProviderTest(Toast, 'Toast');

  stylePropsTest(Toast);

  restPropsTest(Toast, 'div');

  it('should render with default alignments', () => {
    const dom = render(<Toast />);

    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass('Toast Toast--center Toast--bottom');
  });

  it('should render with custom alignments', () => {
    const dom = render(<Toast alignmentX="left" alignmentY="top" />);

    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass('Toast Toast--left Toast--top');
  });

  it('should render with responsive alignments', () => {
    const dom = render(
      <Toast
        alignmentX={{ mobile: 'right', tablet: 'center', desktop: 'left' }}
        alignmentY={{ mobile: 'top', tablet: 'bottom', desktop: 'top' }}
      />,
    );

    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass(
      'Toast Toast--desktop--left Toast--tablet--center Toast--right Toast--desktop--top Toast--tablet--bottom Toast--top',
    );
  });
});
