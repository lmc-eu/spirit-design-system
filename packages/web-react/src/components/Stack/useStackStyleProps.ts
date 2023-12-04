import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritStackProps } from '../../types';

interface StackCSSProperties extends CSSProperties {
  [index: `--${string}`]: string | undefined | number;
}

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
    [StackSpacingClass]: hasSpacing,
    [StackTopDividerClass]: hasStartDivider,
  });

  const stackStyle: StackCSSProperties = {};

  if (typeof spacing === 'object' && spacing !== null) {
    Object.keys(spacing).forEach((key) => {
      const suffix = key === 'mobile' ? '' : `-${key}`;
      (stackStyle as Record<string, string | undefined>)[`--stack-spacing${suffix}`] = `var(--spirit-${spacing[
        key as keyof typeof spacing
      ]?.toString()})`;
    });
  } else if (spacing) {
    (stackStyle as Record<string, string | undefined>)['--stack-spacing'] = `var(--spirit-${spacing})`;
  }

  return {
    classProps,
    props: restProps,
    styleProps: stackStyle,
  };
}
