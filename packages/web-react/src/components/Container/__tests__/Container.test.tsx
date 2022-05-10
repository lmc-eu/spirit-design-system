import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from '../Container';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';

describe('Container', () => {
  classNamePrefixProviderTest(Container, 'Container');

  stylePropsTest(Container);

  it('should render text children', () => {
    const dom = render(<Container>Hello World</Container>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
