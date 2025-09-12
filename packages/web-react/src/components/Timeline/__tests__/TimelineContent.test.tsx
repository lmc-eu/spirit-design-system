import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import TimelineContent from '../TimelineContent';

describe('TimelineContent', () => {
  classNamePrefixProviderTest(TimelineContent, 'TimelineContent');

  stylePropsTest(TimelineContent);

  restPropsTest(TimelineContent, 'div');

  validHtmlAttributesTest(TimelineContent);

  ariaAttributesTest(TimelineContent);

  it('should render with default props', () => {
    render(<TimelineContent data-testid="test-content">Content</TimelineContent>);

    expect(screen.getByTestId('test-content')).toHaveClass('TimelineContent');
  });

  it('should render children correctly', () => {
    render(<TimelineContent>Content</TimelineContent>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
