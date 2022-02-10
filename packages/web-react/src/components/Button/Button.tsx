import React, { MouseEvent, ElementType } from 'react';
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
  tag: ElementType;
}

const defaultProps = {
  color: 'primary',
  type: 'button',
  block: false,
  disabled: false,
  tag: 'button',
};

// `${componentClassName}--${color}`;
const getButtonColorClassname = (className: string, color: Color): string =>
  compose(applyColor<Color>(color))(className);

export const Button = ({
  color,
  onClick,
  type,
  block,
  ariaLabel,
  disabled,
  className,
  tag: Tag,
  ...restProps
}: ButtonProps): JSX.Element => {
  const buttonClass = 'Button';
  const classNamePrefix = useClassNamePrefix();
  const mainClassName = applyClassNamePrefix(classNamePrefix)(buttonClass);
  const buttonBlockClass = `${mainClassName}--block`;

  const classes = classNames(
    mainClassName,
    getButtonColorClassname(mainClassName, color),
    {
      [buttonBlockClass]: block,
    },
    className,
  );

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
    <Tag
      {...restProps}
      className={classes}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel || undefined}
    />
  );
};

Button.defaultProps = defaultProps;

export default Button;
