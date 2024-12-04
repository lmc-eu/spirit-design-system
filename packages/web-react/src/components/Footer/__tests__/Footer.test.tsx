import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { BackgroundColors } from '../../../constants';
import Footer from '../Footer';

describe('Footer', () => {
  stylePropsTest(Footer);

  restPropsTest(Footer, 'footer');

  it('should render text children', () => {
    render(<Footer>Hello World</Footer>);

    expect(screen.getByRole('contentinfo')).toHaveTextContent('Hello World');
  });

  it.each([Object.values(BackgroundColors)])('should have background %s color', (color) => {
    render(<Footer backgroundColor={color}>Hello World</Footer>);

    expect(screen.getByRole('contentinfo')).toHaveClass(`bg-${color}`);
  });

  it('should have correct correct utility class paddings', () => {
    render(
      <Footer paddingTop="space-1000" paddingBottom="space-1100">
        Hello World
      </Footer>,
    );

    expect(screen.getByRole('contentinfo')).toHaveClass('pt-1000 pb-1100');
  });
});
