import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import TabLink from '../TabLink';

describe('TabLink', () => {
  classNamePrefixProviderTest(TabLink, 'Tabs__item');

  it('should render anchor tag', () => {
    const dom = render(<TabLink href="https://www.example.com" />);

    const element = dom.container.querySelector('a') as HTMLElement;
    expect(element).toHaveClass('Tabs__link');
  });
});
