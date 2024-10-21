import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { DirectionAxis } from '../../constants';
import { useAlignmentClass, useClassNamePrefix, useDirectionClass, useSpacingStyle, useWrapClass } from '../../hooks';
import { SpiritFlexProps, FlexDirectionType, FlexAlignmentXType, FlexAlignmentYType } from '../../types';

interface FlexCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

export interface FlexStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the flex element. */
  props: T;
  /** Style props for the element */
  styleProps: FlexCSSProperties;
}

export function useFlexStyleProps(props: SpiritFlexProps<ElementType>): FlexStyles<SpiritFlexProps<ElementType>> {
  const { alignmentX, alignmentY, direction, spacing, spacingX, spacingY, isWrapping, ...restProps } = props;
  const flexClass = useClassNamePrefix('Flex');

  const flexStyle: FlexCSSProperties = {
    ...useSpacingStyle(spacing, 'flex', DirectionAxis.X),
    ...useSpacingStyle(spacing, 'flex', DirectionAxis.Y),
    ...useSpacingStyle(spacingX, 'flex', DirectionAxis.X),
    ...useSpacingStyle(spacingY, 'flex', DirectionAxis.Y),
  };

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
