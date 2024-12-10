import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import Header from '../Header';

describe('Header', () => {
  classNamePrefixProviderTest(Header, 'Header');

  stylePropsTest((props) => <Header {...props} data-testid="header-test" />, 'header-test');

  restPropsTest((props) => <Header {...props} />, 'header');

  it('should render text children', () => {
    const dom = render(<Header id="test">Hello World</Header>);

    const element = dom.container.querySelector('header') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
