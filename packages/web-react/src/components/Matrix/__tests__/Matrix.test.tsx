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

  beforeEach(() => {
    render(<Matrix data-testid="matrix-test-id">{text}</Matrix>);
  });

  it('should render text children', () => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render default elementType', () => {
    const element = screen.getByTestId(testId);

    expect(element.localName).toBe('div');
  });

  it('should render with default CSS properties', () => {
    const element = screen.getByTestId(testId) as HTMLElement;

    expect(element).toHaveStyle({ '--spirit-matrix-columns': '3' });
    expect(element).toHaveStyle({ '--spirit-matrix-rows': '100' });
    expect(element).toHaveStyle({ '--spirit-matrix-item-rows': '100' });
    expect(element).toHaveStyle({ '--spirit-matrix-spacing-x': 'var(--spirit-space-700)' });
    expect(element).toHaveStyle({ '--spirit-matrix-spacing-y': 'var(--spirit-space-0)' });
  });
});
