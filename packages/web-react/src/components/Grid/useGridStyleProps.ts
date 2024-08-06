import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { DirectionAxis } from '../../constants';
import { useClassNamePrefix, useSpacingStyle } from '../../hooks';
import { SpiritGridProps } from '../../types';

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
  const { cols, spacing, spacingX, spacingY, ...restProps } = props;

  const gridClass = useClassNamePrefix('Grid');

  const gridStyle: GridCSSProperties = {
    ...{
      ...useSpacingStyle(spacing, 'grid', DirectionAxis.X),
      ...useSpacingStyle(spacing, 'grid', DirectionAxis.Y),
    },
    ...useSpacingStyle(spacingX, 'grid', DirectionAxis.X),
    ...useSpacingStyle(spacingY, 'grid', DirectionAxis.Y),
  };

  let classes: string;
  let gridColsClass: string;

  if (typeof cols === 'object' && cols !== null) {
    const classList: string[] = [];
    Object.keys(cols).forEach((key) => {
      const infix = key === 'mobile' ? '' : `--${key}`;
      classList.push(`${gridClass}${infix}--cols-${cols[key as keyof typeof cols]}`);
    });

    classes = classNames(gridClass, classList);
  } else {
    gridColsClass = `${gridClass}--cols-${cols}`;
    classes = classNames(gridClass, { [gridColsClass]: cols });
  }

  return {
    classProps: classes,
    props: restProps,
    styleProps: gridStyle,
  };
}
