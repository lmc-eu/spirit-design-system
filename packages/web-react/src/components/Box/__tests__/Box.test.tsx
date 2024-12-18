import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Box from '../Box';

const dataProvider = [
  {
    prop: 'backgroundColor',
    value: 'primary',
    className: 'bg-primary',
    description: 'background color',
  },
  {
    prop: 'borderColor',
    value: 'basic',
    className: 'border-basic',
    description: 'border color',
  },
  {
    prop: 'borderWidth',
    value: '100',
    className: 'border-100',
    description: 'border width',
  },
  {
    prop: 'padding',
    value: 'space-800',
    className: 'p-800',
    description: 'padding',
  },
  {
    prop: 'paddingX',
    value: 'space-800',
    className: 'px-800',
    description: 'horizontal padding',
  },
  {
    prop: 'paddingY',
    value: 'space-800',
    className: 'py-800',
    description: 'vertical padding',
  },
  {
    prop: 'paddingTop',
    value: 'space-800',
    className: 'pt-800',
    description: 'padding top',
  },
  {
    prop: 'paddingBottom',
    value: 'space-800',
    className: 'pb-800',
    description: 'padding bottom',
  },
  {
    prop: 'paddingLeft',
    value: 'space-800',
    className: 'pl-800',
    description: 'padding left',
  },
  {
    prop: 'paddingRight',
    value: 'space-800',
    className: 'pr-800',
    description: 'padding right',
  },
  {
    prop: 'padding',
    value: { mobile: 'space-600', tablet: 'space-800', desktop: 'space-1000' },
    className: 'p-600 p-tablet-800 p-desktop-1000',
    description: 'responsive padding',
  },
];

describe('Box', () => {
  stylePropsTest(Box);

  restPropsTest(Box, 'div');

  it('should render children', () => {
    render(<Box>Content</Box>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should render with background color', () => {
    render(<Box backgroundColor="primary">Content</Box>);

    expect(screen.getByText('Content')).toHaveStyle('background-color: var(--color-primary)');
  });

  it('should render with border radius and width', () => {
    render(
      <Box borderRadius="200" borderWidth="100" data-testid="Box">
        Content
      </Box>,
    );

    expect(screen.getByTestId('Box')).toHaveClass('rounded-200');
  });

  it('should not render correct border radius class when border width is not set', () => {
    render(
      <Box borderRadius="200" data-testid="Box">
        Content
      </Box>,
    );

    expect(screen.getByTestId('Box')).not.toHaveClass('rounded-200');
  });

  it('should render border style', () => {
    render(
      <Box borderStyle="dashed" borderWidth="100" data-testid="Box">
        Content
      </Box>,
    );

    expect(screen.getByTestId('Box')).toHaveClass('border-dashed');
  });

  it.each(dataProvider)('should render with $description', ({ prop, value, className }) => {
    render(
      <Box {...{ [prop]: value }} data-testid="Box">
        Content
      </Box>,
    );

    expect(screen.getByTestId('Box')).toHaveClass(className);
  });
});
