import React, { MouseEvent } from 'react';
import classNames from 'classnames';
import { WithChildren } from '../../types/main';

type Color = 'primary' | 'secondary' | 'tertiary';

const getButtonColorClassname = (componentClassName: string, color: Color): string => `${componentClassName}--${color}`;

export interface ButtonProps extends WithChildren {
  /**
   * Emotion color variant.
   */
  color: Color;
  /**
   * Function to be called on button click.
   */
  onClick?: (event: MouseEvent) => void;
  /**
   * HTML `type` attribute.
   */
  type: 'button' | 'submit';
  /**
   * Block alignment modification
   */
  block: boolean;
  /**
   * Disabling button
   */
  disabled: boolean;
  /**
   * Aria label
   */
  ariaLabel?: string;
  className?: string;
  /**
   * Component CSS class
   */
  componentClassName?: string;
}

export const Button = ({
  color,
  onClick,
  type,
  block,
  ariaLabel,
  disabled,
  className,
  componentClassName,
  ...restProps
}: ButtonProps): JSX.Element => {
  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault();

      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      {...restProps}
      className={classNames(componentClassName, getButtonColorClassname(componentClassName, color), {
        'Button--block': block,
      }, className,)}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel || undefined}
    />
  );
};

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  block: false,
  disabled: false,
  componentClassName = 'Button',
};

export default Button;
