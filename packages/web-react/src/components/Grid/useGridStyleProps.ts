import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { DirectionAxis } from '../../constants';
import { useAlignmentClass, useClassNamePrefix, useSpacingStyle } from '../../hooks';
import { GridColsBreakpoints, SpiritGridProps, GridAlignmentYType, GridAlignmentXType } from '../../types';

interface GridCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

export interface GridStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the grid element. */
  props: T;
  /** Style props for the element */
  styleProps: GridCSSProperties;
}

export function useGridStyleProps(props: SpiritGridProps<ElementType>): GridStyles<SpiritGridProps<ElementType>> {
  const { alignmentX, alignmentY, cols, spacing, spacingX, spacingY, ...restProps } = props;

  const gridClass = useClassNamePrefix('Grid');

  const gridStyle: GridCSSProperties = {
    ...useSpacingStyle(spacing, 'grid', DirectionAxis.X),
    ...useSpacingStyle(spacing, 'grid', DirectionAxis.Y),
    ...useSpacingStyle(spacingX, 'grid', DirectionAxis.X),
    ...useSpacingStyle(spacingY, 'grid', DirectionAxis.Y),
  };

  function generateColsClasses(
    componentClass: string,
    property: number | GridColsBreakpoints | undefined,
    type: string,
  ) {
    if (typeof property === 'object' && property !== null) {
      // We map over the object and generate the classes for each breakpoint
      return Object.keys(property)
        .map((key) => {
          const infix = key === 'mobile' ? '' : `--${key}`;
          const responsiveProperty = (property as Record<string, string>)[key];

          return `${componentClass}${infix}--${type}-${responsiveProperty}`;
        })
        .join(' ');
    }

    return `${componentClass}--${type}-${property}`;
  }

  const classes = classNames(gridClass, {
    [useAlignmentClass(gridClass, alignmentX as GridAlignmentXType, 'alignmentX')]: alignmentX,
    [useAlignmentClass(gridClass, alignmentY as GridAlignmentYType, 'alignmentY')]: alignmentY,
    [generateColsClasses(gridClass, cols, 'cols')]: cols,
  });

  return {
    classProps: classes,
    props: restProps,
    styleProps: gridStyle,
  };
}
