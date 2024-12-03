import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Container from '../Container';

describe('Container', () => {
  const text = 'Hello world';
  const testId = 'flex-test-id';

  classNamePrefixProviderTest(Container, 'Container');

  stylePropsTest(Container);

  restPropsTest(Container, 'div');

  it('should render', () => {
    render(<Container data-testid={testId}>{text}</Container>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render with correct class', () => {
    render(<Container data-testid={testId}>{text}</Container>);

    expect(screen.getByTestId(testId)).toHaveClass('Container');
  });

  it('should render as fluid', () => {
    render(
      <Container isFluid data-testid={testId}>
        {text}
      </Container>,
    );

    expect(screen.getByTestId(testId)).toHaveClass('Container Container--fluid');
  });
});
