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
import Matrix from '../Matrix';

describe('Matrix', () => {
  const text = 'Hello world';
  const testId = 'matrix-test-id';

  classNamePrefixProviderTest(Matrix, 'Matrix');

  stylePropsTest(Matrix);

  restPropsTest(Matrix, 'div');

  validHtmlAttributesTest(Matrix);

  ariaAttributesTest(Matrix);

  elementTypePropsTest(Matrix);

  it('should render text children', () => {
    render(<Matrix>{text}</Matrix>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render with default CSS properties', () => {
    render(<Matrix data-testid={testId} />);

    const element = screen.getByTestId(testId) as HTMLElement;

    expect(element).toHaveStyle({ '--spirit-matrix-columns': '3' });
    expect(element).toHaveStyle({ '--spirit-matrix-rows': '100' });
    expect(element).toHaveStyle({ '--spirit-matrix-item-rows': '100' });
    expect(element).toHaveStyle({ '--spirit-matrix-spacing-x': 'var(--spirit-space-700)' });
    expect(element).toHaveStyle({ '--spirit-matrix-spacing-y': 'var(--spirit-space-0)' });
  });
});
