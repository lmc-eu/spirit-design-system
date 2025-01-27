import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import SkeletonHeading from '../SkeletonHeading';

describe('SkeletonHeading', () => {
  classNamePrefixProviderTest(SkeletonHeading, 'Skeleton');

  stylePropsTest(SkeletonHeading);

  restPropsTest(SkeletonHeading, 'div');

  beforeEach(() => {
    render(<SkeletonHeading data-testid="SkeletonHeading" />);
  });

  it('should have default classname', () => {
    expect(screen.getByTestId('SkeletonHeading')).toHaveClass('Skeleton--heading');
  });

  it('should render default size class when size is not provided', () => {
    expect(screen.getByTestId('SkeletonHeading')).toHaveClass('Skeleton--medium');
  });

  it('should render 1 text child by default', () => {
    expect(screen.getByTestId('SkeletonHeading').children).toHaveLength(1);
  });

  describe('with custom props', () => {
    beforeEach(() => {
      render(<SkeletonHeading data-testid="SkeletonHeadingCustom" lines={3} size="large" />);
    });

    it('should render custom size class when size is provided', () => {
      expect(screen.getByTestId('SkeletonHeadingCustom')).toHaveClass('Skeleton--large');
    });

    it('should render custom text children when lines is provided', () => {
      expect(screen.getByTestId('SkeletonHeadingCustom').children).toHaveLength(3);
    });
  });
});
