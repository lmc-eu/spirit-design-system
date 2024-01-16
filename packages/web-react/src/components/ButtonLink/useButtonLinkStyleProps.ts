import classNames from 'classnames';
import { ElementType } from 'react';
import { warning } from '../../common/utilities';
import { useClassNamePrefix } from '../../hooks';
import { ButtonColor, ButtonSize, SpiritButtonProps } from '../../types';
import { applyColor, applySize } from '../../utils/classname';
import { compose } from '../../utils/compose';

// `${componentClassName}--${color}`;
const getButtonLinkColorClassname = <C = void>(className: string, color: ButtonColor<C>): string =>
  compose(applyColor<ButtonColor<C>>(color))(className);

const getButtonLinkSizeClassname = <S = void>(className: string, size: ButtonSize<S>): string =>
  compose(applySize<ButtonSize<S>>(size))(className);

export interface ButtonLinkStyles {
  /** className props */
  classProps: string;
  /** Props for the button element */
  props: SpiritButtonProps;
}

export function useButtonLinkStyleProps<T extends ElementType = 'button', C = void, S = void>(
  props: SpiritButtonProps<T, C, S>,
): ButtonLinkStyles {
  const { color, isBlock, isDisabled, isLoading, isSquare, size, ...restProps } = props;

  const buttonClass = useClassNamePrefix('Button');
  const buttonBlockClass = `${buttonClass}--block`;
  const buttonDisabledClass = `${buttonClass}--disabled`;
  const buttonLoadingClass = `${buttonClass}--loading`;
  const buttonSquareClass = `${buttonClass}--square`;

  if (isBlock && isSquare) {
    warning(false, 'isBlock and isSquare props are mutually exclusive');
  }

  const classProps = classNames(
    buttonClass,
    getButtonLinkColorClassname(buttonClass, color as ButtonColor<C>),
    getButtonLinkSizeClassname(buttonClass, size as ButtonSize<S>),
    {
      [buttonBlockClass]: isBlock && !isSquare,
      [buttonDisabledClass]: isDisabled || isLoading,
      [buttonLoadingClass]: isLoading,
      [buttonSquareClass]: isSquare && !isBlock,
    },
  );

  return {
    classProps,
    props: restProps,
  };
}
