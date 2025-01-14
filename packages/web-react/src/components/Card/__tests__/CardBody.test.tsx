import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import CardBody from '../CardBody';

describe('CardBody', () => {
  classNamePrefixProviderTest(CardBody, 'CardBody');

  stylePropsTest(CardBody);

  restPropsTest(CardBody, '.CardBody');

  it('should render body card component and have default class name', () => {
    render(<CardBody data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('CardBody');
  });

  it('should have selectable class', () => {
    render(<CardBody data-testid="test" isSelectable />);

    expect(screen.getByTestId('test')).toHaveClass('CardBody--selectable');
  });

  it('should render text children', () => {
    render(<CardBody data-testid="test">Hello World</CardBody>);

    expect(screen.getByTestId('test')).toHaveTextContent('Hello World');
  });
});
