import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { DirectionAxis } from '../../constants';
import {
  useAlignmentClass,
  useClassNamePrefix,
  useDeprecationMessage,
  useSpacingStyle,
  useWrapClass,
} from '../../hooks';
import { FlexAlignmentXType, FlexAlignmentYType, SpacingProp, SpiritFlexProps } from '../../types';
import { generateStylePropsClassNames, stringOrObjectKebabCaseToCamelCase } from '../../utils';

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

  // @see https://jira.almacareer.tech/browse/DS-1629
  useDeprecationMessage({
    method: 'custom',
    trigger: direction === 'row' || direction === 'column',
    componentName: 'Flex',
    customText:
      'Direction values `row` and `column` are deprecated and will be removed in the next major release. Use `horizontal` and `vertical` values instead.',
  });

  const flexClass = useClassNamePrefix('Flex');

  const flexStyle: FlexCSSProperties = {
    ...useSpacingStyle(spacing as SpacingProp, 'flex', DirectionAxis.X),
    ...useSpacingStyle(spacing as SpacingProp, 'flex', DirectionAxis.Y),
    ...useSpacingStyle(spacingX as SpacingProp, 'flex', DirectionAxis.X),
    ...useSpacingStyle(spacingY as SpacingProp, 'flex', DirectionAxis.Y),
  };

  const directionClass = generateStylePropsClassNames(flexClass, stringOrObjectKebabCaseToCamelCase(direction!));

  const classes = classNames(flexClass, useWrapClass(flexClass, isWrapping), {
    [useAlignmentClass(flexClass, alignmentX as FlexAlignmentXType, 'alignmentX')]: alignmentX,
    [useAlignmentClass(flexClass, alignmentY as FlexAlignmentYType, 'alignmentY')]: alignmentY,
    [directionClass]: direction,
  });

  return {
    classProps: classes,
    props: restProps,
    styleProps: flexStyle,
  };
}
