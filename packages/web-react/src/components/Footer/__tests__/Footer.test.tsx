import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Footer from '../Footer';

describe('Footer', () => {
  stylePropsTest(Footer);

  restPropsTest(Footer, 'footer');

  it('should render text children', () => {
    render(<Footer>Hello World</Footer>);

    expect(screen.getByRole('contentinfo')).toHaveTextContent('Hello World');
  });
});
