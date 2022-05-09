import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import Header from '../Header';

describe('Header', () => {
  classNamePrefixProviderTest(Header, 'Header');

  it('should render text children', () => {
    const dom = render(<Header id="test">Hello World</Header>);

    const element = dom.container.querySelector('header') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
