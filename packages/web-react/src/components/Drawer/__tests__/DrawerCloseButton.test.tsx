import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  componentButtonColorPropsTest,
  emotionColorPropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import DrawerCloseButton from '../DrawerCloseButton';

jest.mock('../../../hooks/useIcon');

describe('DrawerCloseButton', () => {
  classNamePrefixProviderTest(DrawerCloseButton, 'DrawerCloseButton');

  stylePropsTest(DrawerCloseButton);

  restPropsTest(DrawerCloseButton, 'button');

  componentButtonColorPropsTest(DrawerCloseButton, 'Button--');

  emotionColorPropsTest(DrawerCloseButton, 'Button--');

  validHtmlAttributesTest(DrawerCloseButton);

  ariaAttributesTest(DrawerCloseButton);

  it('should render drawer close button', () => {
    render(<DrawerCloseButton />);

    expect(screen.getByRole('button')).toHaveClass('DrawerCloseButton');
  });

  it('should render with correct classes', () => {
    render(<DrawerCloseButton data-testid="test" />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('DrawerCloseButton', 'Button--medium', 'Button--tertiary');

    expect(button.querySelector('svg')).toHaveAttribute('height', '24');
    expect(button.querySelector('svg')).toHaveAttribute('width', '24');
  });
});
