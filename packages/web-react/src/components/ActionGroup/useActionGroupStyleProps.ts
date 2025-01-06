import classNames from 'classnames';
import { CSSProperties } from 'react';
import { DirectionAxis } from '../../constants';
import { useAlignmentClass, useClassNamePrefix, useSpacingStyle } from '../../hooks';
import { FlexAlignmentXType, SpiritActionGroupProps, SpacingProp } from '../../types';
import { generateStylePropsClassNames, stringOrObjectKebabCaseToCamelCase } from '../../utils';

interface ActionGroupCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

export interface ActionGroupStyles<T> {
  classProps: string;
  props: T;
  styleProps: ActionGroupCSSProperties;
}

export function useActionGroupStyleProps(props: SpiritActionGroupProps): ActionGroupStyles<SpiritActionGroupProps> {
  const { alignmentX, direction, spacing, spacingX, spacingY, ...restProps } = props;
  const ActionGroupClass = useClassNamePrefix('ActionGroup');

  const ActionGroupStyle: ActionGroupCSSProperties = {
    ...useSpacingStyle(spacing as SpacingProp, 'flex', DirectionAxis.X),
    ...useSpacingStyle(spacing as SpacingProp, 'flex', DirectionAxis.Y),
    ...useSpacingStyle(spacingX as SpacingProp, 'flex', DirectionAxis.X),
    ...useSpacingStyle(spacingY as SpacingProp, 'flex', DirectionAxis.Y),
  };

  const directionClass = generateStylePropsClassNames(ActionGroupClass, stringOrObjectKebabCaseToCamelCase(direction!));

  const classes = classNames(ActionGroupClass, {
    [useAlignmentClass(ActionGroupClass, alignmentX as FlexAlignmentXType, 'alignmentX')]: alignmentX,
    [directionClass]: direction,
  });

  return {
    classProps: classes,
    props: restProps,
    styleProps: ActionGroupStyle,
  };
}
