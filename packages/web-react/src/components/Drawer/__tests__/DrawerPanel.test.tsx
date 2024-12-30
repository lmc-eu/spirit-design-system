import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import DrawerPanel from '../DrawerPanel';

describe('DrawerPanel', () => {
  classNamePrefixProviderTest(DrawerPanel, 'DrawerPanel');

  stylePropsTest(DrawerPanel);

  restPropsTest(DrawerPanel, 'div');

  it('should render drawer panel content', () => {
    render(<DrawerPanel data-testid="test">Test content</DrawerPanel>);

    expect(screen.getByTestId('test')).toHaveTextContent('Test content');
  });

  it('should render custom element', () => {
    render(<DrawerPanel elementType="section" data-testid="test" />);

    expect(screen.getByTestId('test')).toContainHTML('section');
  });

  it('should render with correct class', () => {
    render(<DrawerPanel data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('DrawerPanel');
  });

  it('should render with correct class for content', () => {
    render(<DrawerPanel data-testid="test">Test content</DrawerPanel>);

    expect(screen.getByText('Test content')).toHaveClass('DrawerPanel__content');
    expect(screen.getByText('Test content')).toContainHTML('div');
  });
});
