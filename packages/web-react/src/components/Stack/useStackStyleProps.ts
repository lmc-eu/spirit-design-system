import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix, useSpacingStyle } from '../../hooks';
import { SpacingCSSProperties, SpiritStackProps } from '../../types';

interface StackCSSProperties extends SpacingCSSProperties {}

export interface StackStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: SpiritStackProps;
  /** Style props for the element */
  styleProps: StackCSSProperties;
}

export function useStackStyleProps<T extends ElementType = 'div'>(props: SpiritStackProps<T>): StackStyles {
  const { hasEndDivider, hasIntermediateDividers, hasSpacing, hasStartDivider, spacing, ...restProps } = props;

  const StackClass = useClassNamePrefix('Stack');
  const StackBottomDividerClass = `${StackClass}--hasEndDivider`;
  const StackMiddleDividersClass = `${StackClass}--hasIntermediateDividers`;
  const StackSpacingClass = `${StackClass}--hasSpacing`;
  const StackTopDividerClass = `${StackClass}--hasStartDivider`;
  const classProps = classNames(StackClass, {
    [StackBottomDividerClass]: hasEndDivider,
    [StackMiddleDividersClass]: hasIntermediateDividers,
    [StackSpacingClass]: hasSpacing || spacing,
    [StackTopDividerClass]: hasStartDivider,
  });

  const stackStyle = useSpacingStyle(spacing, 'stack');

  return {
    classProps,
    props: restProps,
    styleProps: stackStyle,
  };
}
