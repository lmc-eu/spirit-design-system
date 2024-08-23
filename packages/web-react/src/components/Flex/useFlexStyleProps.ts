import classNames from 'classnames';
import { ElementType } from 'react';
import { useAlignmentClass, useClassNamePrefix, useDirectionClass, useSpacingStyle, useWrapClass } from '../../hooks';
import {
  SpiritFlexProps,
  SpacingCSSProperties,
  FlexDirectionType,
  FlexAlignmentXType,
  FlexAlignmentYType,
} from '../../types';

export interface FlexStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the flex element. */
  props: T;
  /** Style props for the element */
  styleProps: SpacingCSSProperties;
}

export function useFlexStyleProps(props: SpiritFlexProps<ElementType>): FlexStyles<SpiritFlexProps<ElementType>> {
  const { alignmentX, alignmentY, direction, spacing, isWrapping, ...restProps } = props;
  const flexClass = useClassNamePrefix('Flex');
  const flexStyle = useSpacingStyle(spacing, 'flex');
  const classes = classNames(flexClass, useWrapClass(flexClass, isWrapping), {
    [useAlignmentClass(flexClass, alignmentX as FlexAlignmentXType, 'alignmentX')]: alignmentX,
    [useAlignmentClass(flexClass, alignmentY as FlexAlignmentYType, 'alignmentY')]: alignmentY,
    [useDirectionClass(flexClass, direction as FlexDirectionType)]: direction,
  });

  return {
    classProps: classes,
    props: restProps,
    styleProps: flexStyle,
  };
}
