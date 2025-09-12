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
import TimelineHeading from '../TimelineHeading';

describe('TimelineHeading', () => {
  classNamePrefixProviderTest(TimelineHeading, 'TimelineHeading');

  stylePropsTest(TimelineHeading);

  restPropsTest(TimelineHeading, 'div');

  validHtmlAttributesTest(TimelineHeading);

  ariaAttributesTest(TimelineHeading);

  it('should render with default props', () => {
    render(<TimelineHeading data-testid="test-heading">Title</TimelineHeading>);

    expect(screen.getByTestId('test-heading')).toHaveClass('TimelineHeading');
  });

  it('should render children correctly', () => {
    render(<TimelineHeading>Title</TimelineHeading>);

    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
