import { ElementType } from 'react';
import classNames from 'classnames';
import { compose } from '../../utils/compose';
import { applyColor, applyClassNamePrefix } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ButtonColor, SpiritButtonProps } from '../../types';

// `${componentClassName}--${color}`;
const getButtonColorClassname = (className: string, color: ButtonColor): string =>
  compose(applyColor<ButtonColor>(color))(className);

export interface ButtonStyles {
  /** className props */
  classProps: string;
}

export function useButtonStyleProps<T extends ElementType = 'button'>(props: SpiritButtonProps<T>): ButtonStyles {
  const { color, block, disabled } = props;

  const buttonClass = 'Button';
  const classNamePrefix = useClassNamePrefix();
  const prefixedButtonClass = applyClassNamePrefix(classNamePrefix)(buttonClass);
  const buttonBlockClass = `${prefixedButtonClass}--block`;
  const buttonDisabledClass = `${prefixedButtonClass}--disabled`;

  const classProps = classNames(prefixedButtonClass, getButtonColorClassname(prefixedButtonClass, color), {
    [buttonBlockClass]: block,
    [buttonDisabledClass]: disabled,
  });

  return {
    classProps,
  };
}
