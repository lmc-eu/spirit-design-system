import { ElementType, CSSProperties } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { GridItemPosition, GridItemPositionBreakpoints, SpiritGridItemProps } from '../../types';

interface GridItemCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

const setStyleProperty = (styleObject: GridItemCSSProperties, propertyName: string, value: string | undefined) => {
  (styleObject as Record<string, string | undefined>)[propertyName] = value;
};

const setGridItemStyle = (styleObject: GridItemCSSProperties, baseVarName: string, propValue: GridItemPosition) => {
  if (typeof propValue === 'object' && propValue !== null) {
    Object.keys(propValue).forEach((key) => {
      const suffix = key === 'mobile' ? '' : `-${key}`;
      const propName = `--${baseVarName}${suffix}`;
      setStyleProperty(styleObject, propName, propValue[key as keyof GridItemPositionBreakpoints]?.toString());
    });
  } else {
    const propName = `--${baseVarName}`;
    setStyleProperty(styleObject, propName, propValue?.toString());
  }
};

export interface GridItemStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the grid element. */
  props: T;
  /** Style props for the grid element */
  styleProps: GridItemCSSProperties;
}

export function useGridItemStyleProps(
  props: SpiritGridItemProps<ElementType>,
): GridItemStyles<SpiritGridItemProps<ElementType>> {
  const gridItemClass = useClassNamePrefix('GridItem');

  const gridItemStyle: GridItemCSSProperties = {};

  const typePropNames = Object.keys(props).filter(
    (propName) => propName.startsWith('column') || propName.startsWith('row'),
  );

  typePropNames.forEach((propName) => {
    const type = propName.startsWith('column') ? 'column' : 'row';
    if (props[propName]) {
      setGridItemStyle(
        gridItemStyle,
        `grid-item-${type}-${propName.replace(type, '').toLowerCase()}`,
        props[propName] as GridItemPosition,
      );
    }

    delete props[propName];
  });

  return {
    classProps: gridItemClass,
    props,
    styleProps: gridItemStyle,
  };
}
