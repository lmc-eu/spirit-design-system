import React, { MouseEvent } from 'react';
import classNames from 'classnames';
import { WithChildren } from '../../types/main';
import { compose } from '../../utils/compose';
import { applyColor, applyClassNamePrefix } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';

type Color = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends WithChildren {
  color: Color;
  onClick?: (event: MouseEvent) => void;
  type: 'button' | 'submit';
  block: boolean;
  disabled: boolean;
  ariaLabel?: string;
  className?: string;
  componentClassName: string;
}

// `${componentClassName}--${color}`;
const getButtonColorClassname = (componentClassName: string, color: Color): string =>
  compose(applyColor<Color>(color))(componentClassName);

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
  const classNamePrefix = useClassNamePrefix();
  const mainClassName = applyClassNamePrefix(classNamePrefix)(componentClassName);

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
      className={classNames(
        mainClassName,
        getButtonColorClassname(mainClassName, color),
        {
          'Button--block': block,
        },
        className,
      )}
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
  componentClassName: 'Button',
};

export default Button;
