import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  sizeExtendedPropsTest,
  stylePropsTest,
  textAlignmentPropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import { ContainerTokenSizes } from '../../../constants';
import Container from '../Container';

describe('Container', () => {
  const text = 'Hello world';
  const testId = 'flex-test-id';

  classNamePrefixProviderTest(Container, 'Container');

  stylePropsTest(Container);

  restPropsTest(Container, 'div');

  sizeExtendedPropsTest(Container);

  textAlignmentPropsTest(Container);

  validHtmlAttributesTest(Container);

  ariaAttributesTest(Container);

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

  it.each([Object.values(ContainerTokenSizes)])('should render extended size %s', async (size) => {
    render(<Container size={size} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(`Container--${size}`);
  });
});
