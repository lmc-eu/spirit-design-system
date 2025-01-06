import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import ActionGroup from '../ActionGroup';

describe('ActionGroup', () => {
  const text = 'Hello world';
  const testId = 'action-group-test-id';

  classNamePrefixProviderTest(ActionGroup, 'ActionGroup');

  stylePropsTest(ActionGroup);

  restPropsTest(ActionGroup, 'div');

  it('should render text children', () => {
    render(<ActionGroup data-testid={testId}>{text}</ActionGroup>);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toHaveClass('ActionGroup ActionGroup--row');
  });

  it('should have direction class name', () => {
    render(<ActionGroup direction="column" data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass('ActionGroup--column');
  });

  it('should have responsive direction class name', () => {
    render(<ActionGroup direction={{ mobile: 'row', tablet: 'column', desktop: 'column' }} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(
      'ActionGroup--row ActionGroup--tablet--column ActionGroup--desktop--column',
    );
  });

  it('should have alignmentX class name', () => {
    render(<ActionGroup alignmentX="left" data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass('ActionGroup--alignmentXLeft');
  });

  it('should have responsive alignmentX class name', () => {
    render(<ActionGroup alignmentX={{ mobile: 'left', tablet: 'center', desktop: 'right' }} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(
      'ActionGroup--alignmentXLeft ActionGroup--tablet--alignmentXCenter ActionGroup--desktop--alignmentXRight',
    );
  });

  it('should render with custom spacing', () => {
    render(<ActionGroup spacing="space-600" data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveStyle({ '--flex-spacing-x': 'var(--spirit-space-600)' });
    expect(screen.getByTestId(testId)).toHaveStyle({ '--flex-spacing-y': 'var(--spirit-space-600)' });
  });

  it('should render with custom spacingX and spacingY', () => {
    render(<ActionGroup spacingX="space-500" spacingY="space-1600" data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveStyle({ '--flex-spacing-x': 'var(--spirit-space-500)' });
    expect(screen.getByTestId(testId)).toHaveStyle({ '--flex-spacing-y': 'var(--spirit-space-1600)' });
  });

  it('should render with custom spacing for each breakpoint', () => {
    render(
      <ActionGroup
        spacing={{ mobile: 'space-100', tablet: 'space-1000', desktop: 'space-1200' }}
        data-testid={testId}
      />,
    );

    const element = screen.getByTestId(testId) as HTMLElement;

    expect(element).toHaveStyle({ '--flex-spacing-x': 'var(--spirit-space-100)' });
    expect(element).toHaveStyle({ '--flex-spacing-y': 'var(--spirit-space-100)' });
    expect(element).toHaveStyle({ '--flex-spacing-x-tablet': 'var(--spirit-space-1000)' });
    expect(element).toHaveStyle({ '--flex-spacing-y-tablet': 'var(--spirit-space-1000)' });
    expect(element).toHaveStyle({ '--flex-spacing-x-desktop': 'var(--spirit-space-1200)' });
    expect(element).toHaveStyle({ '--flex-spacing-y-desktop': 'var(--spirit-space-1200)' });
  });

  it('should render with custom spacingX and spacingY for each breakpoint', () => {
    render(
      <ActionGroup
        spacingX={{ mobile: 'space-100', tablet: 'space-1000', desktop: 'space-1200' }}
        spacingY={{ mobile: 'space-200', tablet: 'space-1100', desktop: 'space-1600' }}
        data-testid={testId}
      />,
    );

    const element = screen.getByTestId(testId) as HTMLElement;

    expect(element).toHaveStyle({ '--flex-spacing-x': 'var(--spirit-space-100)' });
    expect(element).toHaveStyle({ '--flex-spacing-y': 'var(--spirit-space-200)' });
    expect(element).toHaveStyle({ '--flex-spacing-x-tablet': 'var(--spirit-space-1000)' });
    expect(element).toHaveStyle({ '--flex-spacing-y-tablet': 'var(--spirit-space-1100)' });
    expect(element).toHaveStyle({ '--flex-spacing-x-desktop': 'var(--spirit-space-1200)' });
    expect(element).toHaveStyle({ '--flex-spacing-y-desktop': 'var(--spirit-space-1600)' });
  });
});
