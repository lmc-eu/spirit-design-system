import { render, waitFor } from '@testing-library/react';
import React, { ComponentType } from 'react';
import getElement from '../testUtils/getElement';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const spacingPropsTest = (Component: ComponentType<any>, prefix: string, testId?: string) => {
  it.each([
    // spacing, spacingX, spacingY, expectedStyle
    [
      'space-100',
      undefined,
      undefined,
      { [`--${prefix}-spacing-x`]: 'var(--spirit-space-100)', [`--${prefix}-spacing-y`]: 'var(--spirit-space-100)' },
    ],
    [undefined, 'space-100', undefined, { [`--${prefix}-spacing-x`]: 'var(--spirit-space-100)' }],
    [undefined, undefined, 'space-100', { [`--${prefix}-spacing-y`]: 'var(--spirit-space-100)' }],
    [
      'space-100',
      'space-200',
      'space-300',
      {
        [`--${prefix}-spacing-x`]: 'var(--spirit-space-200)',
        [`--${prefix}-spacing-y`]: 'var(--spirit-space-300)',
      },
    ],
  ])('renders spacing props', async (spacing, spacingX, spacingY, expected) => {
    const dom = render(<Component spacing={spacing} spacingX={spacingX} spacingY={spacingY} />);

    await waitFor(() => {
      const element = getElement(dom, testId);

      expect(element).toHaveStyle(expected);
    });
  });

  it.each([
    // spacing, spacingX, spacingY, expectedStyle
    [
      { tablet: 'space-100' },
      undefined,
      undefined,
      {
        [`--${prefix}-spacing-x-tablet`]: 'var(--spirit-space-100)',
        [`--${prefix}-spacing-y-tablet`]: 'var(--spirit-space-100)',
      },
    ],
    [undefined, { tablet: 'space-100' }, undefined, { [`--${prefix}-spacing-x-tablet`]: 'var(--spirit-space-100)' }],
    [
      { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
      undefined,
      undefined,
      {
        [`--${prefix}-spacing-x`]: 'var(--spirit-space-100)',
        [`--${prefix}-spacing-y`]: 'var(--spirit-space-100)',
        [`--${prefix}-spacing-x-tablet`]: 'var(--spirit-space-200)',
        [`--${prefix}-spacing-y-tablet`]: 'var(--spirit-space-200)',
        [`--${prefix}-spacing-x-desktop`]: 'var(--spirit-space-300)',
        [`--${prefix}-spacing-y-desktop`]: 'var(--spirit-space-300)',
      },
    ],
    [
      undefined,
      undefined,
      { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
      {
        [`--${prefix}-spacing-y`]: 'var(--spirit-space-100)',
        [`--${prefix}-spacing-y-tablet`]: 'var(--spirit-space-200)',
        [`--${prefix}-spacing-y-desktop`]: 'var(--spirit-space-300)',
      },
    ],
    [
      { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
      { mobile: 'space-400', tablet: 'space-500', desktop: 'space-600' },
      { mobile: 'space-700', tablet: 'space-800', desktop: 'space-900' },
      {
        [`--${prefix}-spacing-x`]: 'var(--spirit-space-400)',
        [`--${prefix}-spacing-y`]: 'var(--spirit-space-700)',
        [`--${prefix}-spacing-x-tablet`]: 'var(--spirit-space-500)',
        [`--${prefix}-spacing-y-tablet`]: 'var(--spirit-space-800)',
        [`--${prefix}-spacing-x-desktop`]: 'var(--spirit-space-600)',
        [`--${prefix}-spacing-y-desktop`]: 'var(--spirit-space-900)',
      },
    ],
  ])('should return responsive spacing CSS properties', async (spacing, spacingX, spacingY, expected) => {
    const dom = render(<Component spacing={spacing} spacingX={spacingX} spacingY={spacingY} />);

    await waitFor(() => {
      const element = getElement(dom, testId);

      expect(element).toHaveStyle(expected);
    });
  });
};
