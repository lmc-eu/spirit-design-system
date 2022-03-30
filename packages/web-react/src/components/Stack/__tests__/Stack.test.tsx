import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import Stack from '../Stack';

describe('Stack', () => {
  classNamePrefixProviderTest(Stack, 'Stack');

  it('should render text children', () => {
    const dom = render(<Stack>Hello World</Stack>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
