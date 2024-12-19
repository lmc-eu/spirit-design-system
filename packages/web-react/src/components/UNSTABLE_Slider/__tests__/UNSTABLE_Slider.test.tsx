import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest, stylePropsTest } from '@local/tests';
import UNSTABLE_Slider from '../UNSTABLE_Slider';

describe('UNSTABLE_Slider', () => {
  const defaultValue = 10;
  const defaultProps = {
    id: 'slider-test',
    label: 'Slider',
    onChange: () => {},
    value: defaultValue,
  };

  stylePropsTest(
    (props) => <UNSTABLE_Slider id={defaultProps.id} {...props} data-testid="slider-test" />,
    'slider-test',
  );

  restPropsTest((props) => <UNSTABLE_Slider id={defaultProps.id} {...props} />, 'div');

  it('should render slider', () => {
    render(<UNSTABLE_Slider {...defaultProps} />);

    const sliderElement = screen.getByRole('slider');

    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
    expect(sliderElement).toBeInTheDocument();
    expect(sliderElement).toHaveValue(defaultValue.toString());
  });

  it('should render helper text', () => {
    const helperText = 'Helper text';

    render(<UNSTABLE_Slider {...defaultProps} helperText={helperText} />);

    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it('should render validation text', () => {
    const validationText = 'Validation text';

    render(
      <UNSTABLE_Slider {...defaultProps} validationText={validationText} validationState="danger" data-testid="test" />,
    );

    expect(screen.getByTestId('test')).toHaveClass('UNSTABLE_Slider UNSTABLE_Slider--danger');
    expect(screen.getByText(validationText)).toBeInTheDocument();
  });
});
