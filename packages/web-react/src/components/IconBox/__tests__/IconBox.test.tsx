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
import { BackgroundColors } from '../../../constants';
import type { BoxBackgroundColorsType, IconBoxShapeType, SizeExtendedDictionaryType } from '../../../types';
import { IconBoxShapesMap, IconBoxSizeMap } from '../constants';
import IconBox from '../IconBox';

const sizeTestCasesProvider = Object.entries(IconBoxSizeMap).map(([size, { iconSize, padding }]) => ({
  size,
  iconSize,
  padding: padding.replace('space-', ''),
}));

const shapeTestCasesProvider = Object.entries(IconBoxShapesMap).map(([shape, radius]) => ({
  shape,
  radius,
}));

const colorTestCasesProvider = [
  {
    color: BackgroundColors.PRIMARY,
    textColor: BackgroundColors.PRIMARY,
    expectedBorder: 'basic',
  },
  {
    color: 'accent-01-subtle',
    textColor: 'accent-01-basic',
    expectedBorder: 'accent-01-subtle',
  },
  {
    color: 'emotion-success-basic',
    textColor: 'emotion-success-subtle',
    expectedBorder: 'emotion-success-basic',
  },
];

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

  it.each(sizeTestCasesProvider)(
    'should render correct icon size and padding for size "$size"',
    ({ size, iconSize, padding }) => {
      render(<IconBox iconName="check" size={size as SizeExtendedDictionaryType} data-testid="IconBox" />);

      const iconBox = screen.getByTestId('IconBox');
      const icon = iconBox.firstElementChild;

      expect(icon).toHaveAttribute('width', `${iconSize}`);
      expect(icon).toHaveAttribute('height', `${iconSize}`);
      expect(iconBox.className).toContain(`p-${padding}`);
    },
  );

  it.each(shapeTestCasesProvider)('should render correct shape class for shape "$shape"', ({ shape, radius }) => {
    render(<IconBox iconName="check" shape={shape as IconBoxShapeType} data-testid="IconBox" />);
    const iconBox = screen.getByTestId('IconBox');

    expect(iconBox.className).toContain(`rounded-${radius}`);
  });

  it.each(colorTestCasesProvider)(
    'should apply correct classes for color "$color"',
    ({ color, textColor, expectedBorder }) => {
      render(<IconBox iconName="check" color={color as BoxBackgroundColorsType} data-testid="IconBox" />);
      const iconBox = screen.getByTestId('IconBox');

      expect(iconBox.className).toContain(`bg-${color}`);
      expect(iconBox.className).toContain(`text-${textColor}`);
      expect(iconBox.className).toContain(`border-${expectedBorder}`);
    },
  );
});
