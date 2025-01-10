import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest, stylePropsTest } from '@local/tests';
import ActionGroup from '../ActionGroup';

describe('ActionGroup', () => {
  const text = 'Hello world';
  const testId = 'action-group-test-id';

  stylePropsTest(ActionGroup);

  restPropsTest(ActionGroup, 'div');

  it('should render text children', () => {
    render(<ActionGroup data-testid={testId}>{text}</ActionGroup>);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toHaveClass(
      'Flex Flex--noWrap Flex--alignmentXStretch Flex--tablet--alignmentXLeft Flex--alignmentYStretch Flex--vertical Flex--tablet--horizontal',
    );
  });

  it('should transfer props to Flex', () => {
    render(
      <ActionGroup
        data-testid={testId}
        direction="vertical"
        alignmentX="right"
        alignmentY="center"
        spacing="space-100"
        isWrapping
      >
        {text}
      </ActionGroup>,
    );

    const element = screen.getByTestId(testId);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(element).toHaveClass('Flex Flex--wrap Flex--alignmentXRight Flex--alignmentYCenter Flex--vertical');
    expect(element).toHaveStyle({
      '--flex-spacing-x': 'var(--spirit-space-100)',
      '--flex-spacing-y': 'var(--spirit-space-100)',
    });
  });
});
