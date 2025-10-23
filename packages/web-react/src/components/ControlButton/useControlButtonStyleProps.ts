import classNames from 'classnames';
import { type ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { type ControlButtonSize, type SpiritControlButtonProps } from '../../types';
import { applySize, compose } from '../../utils';

const getControlButtonSizeClassname = <S = void>(className: string, size: ControlButtonSize<S>): string =>
  compose(applySize<ControlButtonSize<S>>(size))(className);

export interface ControlButtonStyles {
  /** className props */
  classProps: string;
  /** Props for the control button element */
  props: SpiritControlButtonProps;
}

export function useControlButtonStyleProps<T extends ElementType = 'button', S = void>(
  props: SpiritControlButtonProps<T, S>,
): ControlButtonStyles {
  const { isDisabled, isSubtle, isSymmetrical, size, ...restProps } = props;

  const controlButtonClass = useClassNamePrefix('ControlButton');
  const controlButtonDisabledClass = `${controlButtonClass}--disabled`;
  const controlButtonSymmetricalClass = `${controlButtonClass}--symmetrical`;
  const dynamicColorBackgroundInteractiveClass = 'dynamic-color-background-interactive';
  const dynamicColorBorderClass = 'dynamic-color-border';
  const accessibilityTapTargetClass = 'accessibility-tap-target';

  const classProps = classNames(
    controlButtonClass,
    getControlButtonSizeClassname(controlButtonClass, size as ControlButtonSize<S>),
    dynamicColorBackgroundInteractiveClass,
    accessibilityTapTargetClass,
    {
      [controlButtonDisabledClass]: isDisabled,
      [controlButtonSymmetricalClass]: isSymmetrical,
      [dynamicColorBorderClass]: !isSubtle,
    },
  );

  return {
    classProps,
    props: restProps,
  };
}
