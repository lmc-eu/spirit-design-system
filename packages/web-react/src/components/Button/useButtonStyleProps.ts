import { ElementType } from 'react';
import classNames from 'classnames';
import { compose } from '../../utils/compose';
import { applyColor, applySize } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ButtonColor, ButtonSize, SpiritButtonProps } from '../../types';

// `${componentClassName}--${color}`;
const getButtonColorClassname = <C = void>(className: string, color: ButtonColor<C>): string =>
  compose(applyColor<ButtonColor<C>>(color))(className);

const getButtonSizeClassname = <S = void>(className: string, size: ButtonSize<S>): string =>
  compose(applySize<ButtonSize<S>>(size))(className);

export interface ButtonStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the button element */
  props: T;
}

export function useButtonStyleProps<T extends ElementType = 'button', C = void, S = void>(
  props: SpiritButtonProps<T, C, S>,
): ButtonStyles<Omit<SpiritButtonProps<T, C, S>, 'color'>> {
  const { color, isBlock, isDisabled, isSquare, size, ...restProps } = props;

  const buttonClass = useClassNamePrefix('Button');
  const buttonBlockClass = `${buttonClass}--block`;
  const buttonDisabledClass = `${buttonClass}--disabled`;
  const buttonSquareClass = `${buttonClass}--square`;

  if (isBlock && isSquare && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn('isBlock and isSquare props are mutually exclusive');
  }

  const classProps = classNames(
    buttonClass,
    getButtonColorClassname(buttonClass, color as ButtonColor<C>),
    getButtonSizeClassname(buttonClass, size as ButtonSize<S>),
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
