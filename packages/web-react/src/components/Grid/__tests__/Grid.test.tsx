import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  spacingPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import Grid from '../Grid';

describe('Grid', () => {
  const text = 'Hello world';
  const testId = 'grid-test-id';

  classNamePrefixProviderTest(Grid, 'Grid');

  stylePropsTest(Grid);

  spacingPropsTest(Grid, 'grid');

  restPropsTest(Grid, 'div');

  validHtmlAttributesTest(Grid);

  ariaAttributesTest(Grid);

  elementTypePropsTest(Grid);

  it('should render text children', () => {
    render(<Grid>{text}</Grid>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should have desktop cols classname', () => {
    render(<Grid cols={{ desktop: 3 }} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass('Grid--desktop--cols-3');
  });

  it('should have tablet cols classname', () => {
    render(<Grid cols={{ tablet: 3 }} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass('Grid--tablet--cols-3');
  });

  it('should have all cols classnames', () => {
    render(<Grid cols={{ mobile: 2, tablet: 3, desktop: 4 }} data-testid={testId} />);

    const element = screen.getByTestId(testId) as HTMLElement;

    expect(element).toHaveClass('Grid--cols-2');
    expect(element).toHaveClass('Grid--tablet--cols-3');
    expect(element).toHaveClass('Grid--desktop--cols-4');
  });

  it('should have cols classname', () => {
    render(<Grid cols={2} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass('Grid--cols-2');
  });

  it('should render without spacing', () => {
    render(<Grid data-testid={testId} />);

    const element = screen.getByTestId(testId) as HTMLElement;

    expect(element).not.toHaveAttribute('style');
  });

  it('should render with default alignment classes', () => {
    render(<Grid data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass('Grid--alignmentXStretch Grid--alignmentYStretch');
  });

  it('should render with horizontal alignment', () => {
    render(<Grid alignmentX="center" data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass('Grid--alignmentXCenter');
  });

  it('should render with horizontal and vertical alignment', () => {
    render(<Grid alignmentX="center" alignmentY="center" data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass('Grid--alignmentXCenter Grid--alignmentYCenter');
  });

  it('should render with some responsive horizontal alignments', () => {
    render(<Grid alignmentX={{ tablet: 'center', desktop: 'right' }} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(
      'Grid Grid--alignmentXStretch Grid--tablet--alignmentXCenter Grid--desktop--alignmentXRight',
    );
  });

  it('should render with all responsive horizontal alignments', () => {
    render(<Grid alignmentX={{ mobile: 'left', tablet: 'center', desktop: 'right' }} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(
      'Grid Grid--alignmentXLeft Grid--tablet--alignmentXCenter Grid--desktop--alignmentXRight',
    );
  });

  it('should render with responsive horizontal and vertical alignment', () => {
    render(
      <Grid
        alignmentX={{ mobile: 'left', tablet: 'center', desktop: 'right' }}
        alignmentY={{ mobile: 'top', tablet: 'center', desktop: 'bottom' }}
        data-testid={testId}
      />,
    );

    expect(screen.getByTestId(testId)).toHaveClass(
      'Grid Grid--alignmentXLeft Grid--tablet--alignmentXCenter Grid--desktop--alignmentXRight Grid--alignmentYTop Grid--tablet--alignmentYCenter Grid--desktop--alignmentYBottom',
    );
  });
});
