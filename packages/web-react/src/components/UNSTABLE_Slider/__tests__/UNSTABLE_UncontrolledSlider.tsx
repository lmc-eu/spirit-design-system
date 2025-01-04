import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { restPropsTest, stylePropsTest } from '@local/tests';
import UNSTABLE_UncontrolledSlider from '../UNSTABLE_UncontrolledSlider';

describe('UNSTABLE_Slider', () => {
  const defaultProps = {
    id: 'slider-test',
    label: 'Slider',
  };

  stylePropsTest(
    (props) => <UNSTABLE_UncontrolledSlider id={defaultProps.id} {...props} data-testid="slider-test" />,
    'slider-test',
  );

  restPropsTest((props) => <UNSTABLE_UncontrolledSlider id={defaultProps.id} {...props} />, 'div');

  it('should render slider', () => {
    render(<UNSTABLE_UncontrolledSlider {...defaultProps} />);

    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('should render helper text', () => {
    const helperText = 'Helper text';

    render(<UNSTABLE_UncontrolledSlider {...defaultProps} helperText={helperText} />);

    const helperTextElement = screen.getByText(helperText);

    expect(helperTextElement).toBeInTheDocument();
    expect(helperTextElement).toHaveClass('UNSTABLE_Slider__helperText');
  });

  it('should render validation text', () => {
    const validationText = 'Validation text';

    render(
      <UNSTABLE_UncontrolledSlider
        {...defaultProps}
        validationText={validationText}
        validationState="danger"
        data-testid="test"
      />,
    );

    expect(screen.getByTestId('test')).toHaveClass('UNSTABLE_Slider UNSTABLE_Slider--danger');
    expect(screen.getByText(validationText)).toBeInTheDocument();
  });
});
