import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import { ButtonColor, ButtonSize } from '../../../types';
import { Button } from '../../Button';
import SplitButton from '../SplitButton';

describe('Pill', () => {
  classNamePrefixProviderTest(SplitButton, 'SplitButton');

  stylePropsTest(SplitButton);

  restPropsTest(SplitButton, 'div');

  it('should have default classname', () => {
    render(<SplitButton data-testid="test" />);

    expect(screen.getByTestId('test')).toHaveClass('SplitButton');
  });

  it('should render text children', () => {
    render(<SplitButton>Content</SplitButton>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it.each(['primary', 'secondary', 'tertiary'])('should render color %s', (color) => {
    render(
      <SplitButton color={color as ButtonColor<void>}>
        <Button>Button</Button>
      </SplitButton>,
    );

    expect(screen.getByText('Button')).toHaveClass(`Button--${color}`);
  });

  it.each(['small', 'medium', 'large'])('should render size %s', (size) => {
    render(
      <SplitButton size={size as ButtonSize<void>}>
        <Button>Button</Button>
      </SplitButton>,
    );

    expect(screen.getByText('Button')).toHaveClass(`Button--${size}`);
  });

  it('should render color and size', () => {
    const color = 'secondary' as ButtonColor<void>;
    const size = 'small' as ButtonSize<void>;

    render(
      <SplitButton color={color} size={size}>
        <Button>Button</Button>
      </SplitButton>,
    );

    expect(screen.getByText('Button')).toHaveClass(`Button--${color}`);
    expect(screen.getByText('Button')).toHaveClass(`Button--${size}`);
  });

  it('should render color and size even when set on button', () => {
    const color = 'secondary' as ButtonColor<void>;
    const size = 'small' as ButtonSize<void>;

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
