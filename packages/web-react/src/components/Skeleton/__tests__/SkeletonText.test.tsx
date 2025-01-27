import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import SkeletonText from '../SkeletonText';

describe('SkeletonText', () => {
  classNamePrefixProviderTest(SkeletonText, 'Skeleton');

  stylePropsTest(SkeletonText);

  restPropsTest(SkeletonText, 'div');

  beforeEach(() => {
    render(<SkeletonText data-testid="SkeletonText" />);
  });

  it('should have default classname', () => {
    expect(screen.getByTestId('SkeletonText')).toHaveClass('Skeleton--text');
  });

  it('should render default size class when size is not provided', () => {
    expect(screen.getByTestId('SkeletonText')).toHaveClass('Skeleton--medium');
  });

  it('should render 1 text child by default', () => {
    expect(screen.getByTestId('SkeletonText').children).toHaveLength(1);
  });

  describe('with custom props', () => {
    beforeEach(() => {
      render(<SkeletonText data-testid="SkeletonTextCustom" lines={3} size="large" />);
    });

    it('should render custom size class when size is provided', () => {
      expect(screen.getByTestId('SkeletonTextCustom')).toHaveClass('Skeleton--large');
    });

    it('should render custom text children when lines is provided', () => {
      expect(screen.getByTestId('SkeletonTextCustom').children).toHaveLength(3);
    });
  });
});
