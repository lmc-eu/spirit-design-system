import { ElementType } from 'react';
import classNames from 'classnames';
import { compose } from '../../utils/compose';
import { applyColor } from '../../utils/classname';
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

  const buttonClass = useClassNamePrefix('Button');
  const buttonBlockClass = `${buttonClass}--block`;
  const buttonDisabledClass = `${buttonClass}--disabled`;

  const classProps = classNames(buttonClass, getButtonColorClassname(buttonClass, color), {
    [buttonBlockClass]: block,
    [buttonDisabledClass]: disabled,
  });

  return {
    classProps,
  };
}
