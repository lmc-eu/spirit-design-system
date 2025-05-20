import classNames from 'classnames';
import { ElementType } from 'react';
import { warning } from '../../common/utilities';
import { useClassNamePrefix, useDeprecationMessage } from '../../hooks';
import { ButtonColor, ButtonSize, SpiritButtonProps } from '../../types';
import { applyColor, applySize } from '../../utils/classname';
import { compose } from '../../utils/compose';

// `${componentClassName}--${color}`;
const getButtonColorClassname = <C = void>(className: string, color: ButtonColor<C>): string =>
  compose(applyColor<ButtonColor<C>>(color))(className);

const getButtonSizeClassname = <S = void>(className: string, size: ButtonSize<S>): string =>
  compose(applySize<ButtonSize<S>>(size))(className);

export interface ButtonStyles {
  /** className props */
  classProps: string;
  /** Props for the button element */
  props: SpiritButtonProps;
}

export function useButtonStyleProps<T extends ElementType = 'button', C = void, S = void>(
  props: SpiritButtonProps<T, C, S>,
): ButtonStyles {
  const { color, isBlock, isDisabled, isLoading, isSymmetrical, size, ...restProps } = props;

  // @see https://jira.almacareer.tech/browse/DS-1897
  useDeprecationMessage({
    method: 'custom',
    trigger: !!isBlock,
    componentName: 'Button',
    customText:
      "The `isBlock` property will be deleted in the next major release. Please read component's documentation for more information.",
  });

  const buttonClass = useClassNamePrefix('Button');
  const buttonBlockClass = `${buttonClass}--block`;
  const buttonDisabledClass = `${buttonClass}--disabled`;
  const buttonLoadingClass = `${buttonClass}--loading`;
  const buttonSymmetricalClass = `${buttonClass}--symmetrical`;

  if (isBlock && isSymmetrical) {
    warning(false, 'isBlock and isSymmetrical props are mutually exclusive');
  }

  const classProps = classNames(
    buttonClass,
    getButtonColorClassname(buttonClass, color as ButtonColor<C>),
    getButtonSizeClassname(buttonClass, size as ButtonSize<S>),
    {
      [buttonBlockClass]: isBlock && !isSymmetrical,
      [buttonDisabledClass]: isDisabled || isLoading,
      [buttonLoadingClass]: isLoading,
      [buttonSymmetricalClass]: isSymmetrical && !isBlock,
    },
  );

  return {
    classProps,
    props: restProps,
  };
}
