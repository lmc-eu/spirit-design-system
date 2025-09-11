import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  sizePropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import { ComponentButtonColors } from '../../../constants';
import { type SplitButtonColorType } from '../../../types';
import { Button } from '../../Button';
import SplitButton from '../SplitButton';

describe('SplitButton', () => {
  const splitButtonColors = Object.values(ComponentButtonColors).filter(
    (color) => color !== ComponentButtonColors.PLAIN,
  ) as SplitButtonColorType<void>[];

  classNamePrefixProviderTest(SplitButton, 'SplitButton');

  stylePropsTest(SplitButton);

  restPropsTest(SplitButton, 'div');

  validHtmlAttributesTest(SplitButton);

  ariaAttributesTest(SplitButton);

  sizePropsTest(
    (props) => (
      <SplitButton {...props}>
        <Button data-testid="split-button-test-id">Button</Button>
      </SplitButton>
    ),
    'split-button-test-id',
  );

  it('should have default classname', () => {
    render(<SplitButton data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('SplitButton');
  });

  it('should render text children', () => {
    render(<SplitButton>Content</SplitButton>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it.each(splitButtonColors)('should render color %s on buttons', (color) => {
    render(
      <SplitButton color={color}>
        <Button>Button</Button>
      </SplitButton>,
    );

    expect(screen.getByText('Button')).toHaveClass(`Button--${color}`);
  });

  it('should render color and size on buttons', () => {
    render(
      <SplitButton color="secondary" size="small">
        <Button>Button</Button>
      </SplitButton>,
    );

    expect(screen.getByText('Button')).toHaveClass('Button--secondary');
    expect(screen.getByText('Button')).toHaveClass('Button--small');
  });

  it('should override color and size from SplitButton when Button has different values', () => {
    const color = 'secondary';
    const size = 'small';

    render(
      <SplitButton color={color} size={size}>
        <Button color="tertiary" size="large">
          Button
        </Button>
      </SplitButton>,
    );

    expect(screen.getByText('Button')).toHaveClass(`Button--${color}`);
    expect(screen.getByText('Button')).toHaveClass(`Button--${size}`);
  });
});
