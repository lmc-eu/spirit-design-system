import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import StackItem from '../StackItem';

describe('StackItem', () => {
  classNamePrefixProviderTest(StackItem, 'StackItem');

  stylePropsTest(StackItem);

  restPropsTest(StackItem, 'div');

  it('should render text children', () => {
    render(<StackItem data-testid="test">Hello World</StackItem>);

    expect(screen.getByTestId('test')).toHaveTextContent('Hello World');
  });

  it('should render a list element', () => {
    render(<StackItem elementType="li" />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
