import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import IconBox from '../IconBox';

describe('IconBox', () => {
  restPropsTest(IconBox, 'div');

  stylePropsTest(IconBox);

  validHtmlAttributesTest(IconBox);

  ariaAttributesTest(IconBox);

  elementTypePropsTest(IconBox);

  it('should render the icon', () => {
    render(<IconBox iconName="check" data-testid="IconBox" />);

    expect(screen.getByTestId('IconBox')).toBeInTheDocument();
  });

  it('should apply default props (border, color, size, radius)', () => {
    render(<IconBox iconName="check" data-testid="IconBox" />);
    const iconBox = screen.getByTestId('IconBox');

    expect(iconBox).toHaveClass('bg-primary');
    expect(iconBox).toHaveClass('border-100');
    expect(iconBox).toHaveClass('rounded-300');
    expect(iconBox).toHaveClass('text-primary');
  });

  it('should render custom size icon', () => {
    render(<IconBox iconName="check" size="large" data-testid="IconBox" />);
    const iconBox = screen.getByTestId('IconBox');
    expect(iconBox.firstElementChild).toHaveAttribute('width', '28');
    expect(iconBox.firstElementChild).toHaveAttribute('height', '28');
  });

  it('should render with custom shape', () => {
    render(<IconBox iconName="check" shape="circle" data-testid="IconBox" />);
    expect(screen.getByTestId('IconBox')).toHaveClass('rounded-full');
  });

  it('should support custom elementType', () => {
    render(<IconBox iconName="check" elementType="section" data-testid="IconBox" />);
    expect(screen.getByTestId('IconBox')).toContainHTML('section');
  });
});
