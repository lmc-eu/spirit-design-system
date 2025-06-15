import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { DirectionAxis } from '../../constants';
import { useClassNamePrefix, useSpacingStyle } from '../../hooks';
import { SpiritMatrixProps } from '../../types';

interface CustomizedCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

export interface MatrixStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the Matrix element. */
  props: T;
  /** Style props for the element */
  styleProps: CSSProperties;
}

/**
 * Generates CSS style properties for a given dimension (e.g., columns, rows) based on breakpoints or a single value.
 *
 * @param property - The dimension property, which can be an object with breakpoints or a single number.
 * @param prefix - The CSS variable prefix to use for the generated styles.
 * @returns A `CSSProperties` object containing the generated styles.
 */
const useDimensionStyle = (property: object | number | undefined, prefix: string): CSSProperties => {
  const style: CustomizedCSSProperties = {};
  const cssPrefix: string = `--${prefix}`;

  if (typeof property === 'object' && property !== null) {
    Object.keys(property).forEach((key) => {
      const breakpointSuffix = key === 'mobile' ? '' : `-${key}`;
      const value = (property as Record<string, string | undefined>)[key];
      (style as Record<string, string | undefined>)[`${cssPrefix}${breakpointSuffix}`] = `${value?.toString()}`;
    });
  } else if (property) {
    (style as Record<string, string | undefined>)[`${cssPrefix}`] = `${property?.toString()}`;
  }

  return style;
};

export function useMatrixStyleProps(
  props: SpiritMatrixProps<ElementType>,
): MatrixStyles<SpiritMatrixProps<ElementType>> {
  const { cols, itemRows, rows, spacing, spacingX, spacingY, ...restProps } = props;

  const matrixClass = useClassNamePrefix('Matrix');
  const matrixPrefix: string = `${cssVariablePrefix}matrix`;

  const matrixCustomStyle: CustomizedCSSProperties = {
    ...useDimensionStyle(cols, `${matrixPrefix}-columns`),
    ...useDimensionStyle(rows, `${matrixPrefix}-rows`),
    ...useDimensionStyle(itemRows, `${matrixPrefix}-item-rows`),
    ...useSpacingStyle(spacing, matrixPrefix, DirectionAxis.X),
    ...useSpacingStyle(spacing, matrixPrefix, DirectionAxis.Y),
    ...useSpacingStyle(spacingX, matrixPrefix, DirectionAxis.X),
    ...useSpacingStyle(spacingY, matrixPrefix, DirectionAxis.Y),
  };

  return {
    classProps: classNames(matrixClass),
    props: restProps,
    styleProps: matrixCustomStyle,
  };
}
