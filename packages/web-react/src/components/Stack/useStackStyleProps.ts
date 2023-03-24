import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritStackProps } from '../../types';

export interface StackStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: SpiritStackProps;
}

export function useStackStyleProps<T extends ElementType = 'div'>(props: SpiritStackProps<T>): StackStyles {
  const { hasEndDivider, hasIntermediateDividers, hasSpacing, hasStartDivider, ...restProps } = props;

  const StackClass = useClassNamePrefix('Stack');
  const StackBottomDividerClass = `${StackClass}--hasEndDivider`;
  const StackMiddleDividersClass = `${StackClass}--hasIntermediateDividers`;
  const StackSpacingClass = `${StackClass}--hasSpacing`;
  const StackTopDividerClass = `${StackClass}--hasStartDivider`;
  const classProps = classNames(StackClass, {
    [StackBottomDividerClass]: hasEndDivider,
    [StackMiddleDividersClass]: hasIntermediateDividers,
    [StackSpacingClass]: hasSpacing,
    [StackTopDividerClass]: hasStartDivider,
  });

  return {
    classProps,
    props: restProps,
  };
}
