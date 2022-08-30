import { ElementType } from 'react';
import classNames from 'classnames';
import { compose } from '../../utils/compose';
import { applyColor, applySize } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ButtonColor, ButtonSize, SpiritButtonProps } from '../../types';

// `${componentClassName}--${color}`;
const getButtonColorClassname = (className: string, color: ButtonColor): string =>
  compose(applyColor<ButtonColor>(color))(className);

const getButtonSizeClassname = (className: string, size: ButtonSize): string =>
  compose(applySize<ButtonSize>(size))(className);

export interface ButtonStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the button element */
  props: T;
}

export function useButtonStyleProps<T extends ElementType = 'button'>(
  props: SpiritButtonProps<T>,
): ButtonStyles<Omit<SpiritButtonProps<T>, 'color'>> {
  const { color, isBlock, isDisabled, isSquare, size, ...restProps } = props;

  const buttonClass = useClassNamePrefix('Button');
  const buttonBlockClass = `${buttonClass}--block`;
  const buttonDisabledClass = `${buttonClass}--disabled`;
  const buttonSquareClass = `${buttonClass}--square`;

  if (isBlock && isSquare) {
    // eslint-disable-next-line no-console
    console.warn('isBlock and isSquare props are mutually exclusive');
  }

  const classProps = classNames(
    buttonClass,
    getButtonColorClassname(buttonClass, color),
    getButtonSizeClassname(buttonClass, size as ButtonSize),
    {
      [buttonBlockClass]: isBlock && !isSquare,
      [buttonDisabledClass]: isDisabled,
      [buttonSquareClass]: isSquare && !isBlock,
    },
  );

  return {
    classProps,
    props: restProps,
  };
}
