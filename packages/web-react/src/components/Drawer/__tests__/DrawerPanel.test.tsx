import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import DrawerPanel from '../DrawerPanel';

describe('DrawerPanel', () => {
  classNamePrefixProviderTest(DrawerPanel, 'DrawerPanel');

  stylePropsTest(DrawerPanel);

  restPropsTest(DrawerPanel, 'div');

  validHtmlAttributesTest(DrawerPanel);

  ariaAttributesTest(DrawerPanel);

  elementTypePropsTest(DrawerPanel);

  it('should render drawer panel content', () => {
    render(<DrawerPanel data-testid="test">Test content</DrawerPanel>);

    expect(screen.getByTestId('test')).toHaveTextContent('Test content');
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
