import React from 'react';
import classNames from 'classnames';

type Color = 'primary' | 'secondary' | 'tertiary';

const getButtonColorClassname = (color: Color): string => `Button--${color}`;

export interface ButtonProps {
  /**
   * Emotion color variant.
   */
  color: Color;
  /**
   * Button label.
   */
  label: string;
  /**
   * Function to be called on button click.
   */
  onClick: () => void;
  /**
   * HTML `type` attribute.
   */
  type: 'button' | 'submit';
}

export const Button = ({
  color,
  label,
  onClick,
  type,
}: ButtonProps): JSX.Element => (
  <button
    className={classNames('Button', getButtonColorClassname(color))}
    onClick={onClick}
    type={type}
  >
    {label}
  </button>
);

Button.defaultProps = {
  color: 'primary',
  type: 'button',
};

export default Button;
