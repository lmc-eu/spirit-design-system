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
  const { color, isBlock, isDisabled, isSquare } = props;

  const buttonClass = useClassNamePrefix('Button');
  const buttonBlockClass = `${buttonClass}--block`;
  const buttonDisabledClass = `${buttonClass}--disabled`;
  const buttonSquareClass = `${buttonClass}--square`;

  if (isBlock && isSquare) {
    // eslint-disable-next-line no-console
    console.warn('isBlock and isSquare props are mutually exclusive');
  }

  const classProps = classNames(buttonClass, getButtonColorClassname(buttonClass, color), {
    [buttonBlockClass]: isBlock && !isSquare,
    [buttonDisabledClass]: isDisabled,
    [buttonSquareClass]: isSquare && !isBlock,
  });

  return {
    classProps,
  };
}
