import { render } from '@testing-library/react';
import React from 'react';
import { accessibilityTest, guardMissingSelector, runAxe } from '@local/tests';
import Timeline from '../Timeline';
import TimelineContent from '../TimelineContent';
import TimelineHeading from '../TimelineHeading';
import TimelineMarker from '../TimelineMarker';
import TimelineStep from '../TimelineStep';

jest.mock('../../../hooks/useIcon');

describe('Timeline accessibility', () => {
  const timelineStepContent = (stepNumber: number) => (
    <>
      <TimelineHeading>
        <h3>Step {stepNumber}</h3>
      </TimelineHeading>
      <TimelineContent>
        <p>Step {stepNumber} content</p>
      </TimelineContent>
    </>
  );

  const timelineStepWithNumber = (stepNumber: number) => (
    <TimelineStep>
      <TimelineMarker variant="number">{stepNumber}</TimelineMarker>
      {timelineStepContent(stepNumber)}
    </TimelineStep>
  );

  const timelineStepWithDot = (
    <TimelineStep>
      <TimelineMarker variant="dot" />
      {timelineStepContent(1)}
    </TimelineStep>
  );

  const timelineContent = (
    <>
      {timelineStepWithNumber(1)}
      {timelineStepWithNumber(2)}
    </>
  );

  accessibilityTest((props) => <Timeline {...props}>{timelineContent}</Timeline>, 'ol');

  it('should be accessible with custom element type', async () => {
    const { container } = render(<Timeline elementType="ul">{timelineStepWithDot}</Timeline>);

    const timeline = container.querySelector('ul');
    guardMissingSelector('ul', timeline);

    const results = await runAxe(timeline);

    expect(results).toHaveNoAxeViolations();
  });

  it('should be accessible with dot markers', async () => {
    const { container } = render(<Timeline>{timelineStepWithDot}</Timeline>);

    const timeline = container.querySelector('ol');
    guardMissingSelector('ol', timeline);

    const results = await runAxe(timeline);

    expect(results).toHaveNoAxeViolations();
  });
});
