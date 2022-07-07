import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from '../Container';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

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
