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
import { TIMELINE_MARKER } from '../constants';
import TimelineMarker from '../TimelineMarker';

describe('TimelineMarker', () => {
  classNamePrefixProviderTest(TimelineMarker, 'TimelineMarker');

  stylePropsTest(TimelineMarker);

  restPropsTest(TimelineMarker, 'div');

  validHtmlAttributesTest(TimelineMarker);

  ariaAttributesTest(TimelineMarker);

  it('should render with default props', () => {
    render(<TimelineMarker data-testid="test-marker" />);
    const marker = screen.getByTestId('test-marker');

    expect(marker).toBeInTheDocument();
    expect(marker).toHaveClass('TimelineMarker', 'TimelineMarker--number');
    expect(marker).toHaveAttribute('aria-hidden', 'true');
  });

  it(`should render children when variant is ${TIMELINE_MARKER.DOT}`, () => {
    render(<TimelineMarker>Content</TimelineMarker>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it(`should render children when variant is not ${TIMELINE_MARKER.DOT}`, () => {
    render(
      <TimelineMarker variant={TIMELINE_MARKER.DOT} data-testid="test-marker">
        This should not be visible
      </TimelineMarker>,
    );
    const marker = screen.getByTestId('test-marker');

    expect(marker).toBeInTheDocument();
    expect(marker).toHaveClass('TimelineMarker--dot');
    expect(screen.queryByText('This should not be visible')).not.toBeInTheDocument();
  });

  Object.values(TIMELINE_MARKER).forEach((variant) => {
    it(`should render with ${variant} class`, () => {
      render(<TimelineMarker variant={variant} data-testid="test-marker" />);
      const marker = screen.getByTestId('test-marker');

      expect(marker).toHaveClass(`TimelineMarker--${variant}`);
    });
  });

  it('should render with custom color props', () => {
    render(
      <TimelineMarker
        backgroundColor="emotion-success-subtle"
        borderColor="emotion-success-basic"
        textColor="emotion-success-basic"
      >
        1
      </TimelineMarker>,
    );
    const marker = screen.getByText('1');

    expect(marker).toHaveClass(
      'TimelineMarker--number',
      'bg-emotion-success-subtle',
      'border-emotion-success-basic',
      'text-emotion-success-basic',
    );
  });
});
