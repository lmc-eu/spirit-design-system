import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import UNSTABLE_Truncate from '../UNSTABLE_Truncate';

describe('UNSTABLE_Truncate', () => {
  classNamePrefixProviderTest(UNSTABLE_Truncate, 'text-truncate-multiline');

  stylePropsTest(UNSTABLE_Truncate);

  restPropsTest(UNSTABLE_Truncate, 'span');

  it('should have default classname', () => {
    render(<UNSTABLE_Truncate>Text content</UNSTABLE_Truncate>);

    expect(screen.getByText('Text content')).toHaveClass('text-truncate-multiline');
  });

  it('should have correct style based on lines', () => {
    render(<UNSTABLE_Truncate lines={2}>Text content</UNSTABLE_Truncate>);
    const text = screen.getByText('Text content');

    expect(text).toHaveClass('text-truncate-multiline');
    expect(text).toHaveStyle('--text-truncate-lines:2;');
  });

  it('should render children', () => {
    render(<UNSTABLE_Truncate>Text content</UNSTABLE_Truncate>);

    expect(screen.getByText('Text content')).toBeInTheDocument();
  });

  it('should render with custom elementType', () => {
    render(<UNSTABLE_Truncate elementType="h2">Text content</UNSTABLE_Truncate>);

    expect(screen.getByText('Text content')).toContainHTML('h2');
  });
});
