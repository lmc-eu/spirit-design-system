import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Container from '../Container';

describe('Container', () => {
  classNamePrefixProviderTest(Container, 'Container');

  stylePropsTest(Container);

  restPropsTest(Container, 'div');

  it('should render text children', () => {
    const dom = render(<Container>Hello World</Container>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
