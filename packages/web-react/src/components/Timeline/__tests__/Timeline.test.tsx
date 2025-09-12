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
import Timeline from '../Timeline';

describe('Timeline', () => {
  classNamePrefixProviderTest(Timeline, 'Timeline');

  stylePropsTest(Timeline);

  restPropsTest(Timeline, 'ol');

  validHtmlAttributesTest(Timeline);

  ariaAttributesTest(Timeline);

  elementTypePropsTest(Timeline);

  it('should render with default props', () => {
    render(<Timeline>Item</Timeline>);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('list')).toHaveClass('Timeline');
  });

  it('should render with default element type ol', () => {
    render(<Timeline>Item</Timeline>);
    const timeline = screen.getByRole('list');

    expect(timeline.tagName.toLowerCase()).toBe('ol');
  });

  it('should render children correctly', () => {
    render(<Timeline>Item</Timeline>);

    expect(screen.getByText('Item')).toBeInTheDocument();
  });
});
