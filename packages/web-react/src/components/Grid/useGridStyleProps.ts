import classNames from 'classnames';
import { CSSProperties, ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritGridProps } from '../../types';

interface GridCSSProperties extends CSSProperties {
  [key: string]: string | undefined | number;
}

const setStyleProperty = (styleObject: GridCSSProperties, propertyName: string, value: string | undefined) => {
  (styleObject as Record<string, string | undefined>)[propertyName] = `var(--spirit-${value})`;
};

const setGridStyle = (styleObject: GridCSSProperties, baseVarName: string, propValue: GridCSSProperties) => {
  if (typeof propValue === 'object' && propValue !== null) {
    Object.keys(propValue).forEach((key) => {
      const suffix = key === 'mobile' ? '' : `-${key}`;
      const propName = `--${baseVarName}${suffix}`;
      setStyleProperty(styleObject, propName, propValue[key as keyof GridCSSProperties]?.toString());
    });
  } else {
    const propName = `--${baseVarName}`;
    setStyleProperty(styleObject, propName, propValue);
  }
};

export interface GridStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the grid element. */
  props: T;
  /** Style props for the element */
  styleProps: GridCSSProperties;
}

export function useGridStyleProps(props: SpiritGridProps<ElementType>): GridStyles<SpiritGridProps<ElementType>> {
  const { cols, ...restProps } = props;

  const gridClass = useClassNamePrefix('Grid');

  const gridStyle: GridCSSProperties = {};

  const typePropNames = Object.keys(props).filter((propName) => propName.startsWith('spacing'));

  typePropNames.forEach((propName) => {
    let type: string;

    if (props[propName]) {
      if (propName.startsWith('spacingX')) {
        type = 'spacing-x';
      } else if (propName.startsWith('spacingY')) {
        type = 'spacing-y';
      } else {
        type = propName;
      }

      if (type === 'spacing') {
        setGridStyle(
          gridStyle,
          `grid-spacing-x${propName.replace(type, '').toLowerCase()}`,
          props[propName] as GridCSSProperties,
        );
        setGridStyle(
          gridStyle,
          `grid-spacing-y${propName.replace(type, '').toLowerCase()}`,
          props[propName] as GridCSSProperties,
        );
      } else {
        setGridStyle(gridStyle, `grid-${type}`, props[propName] as GridCSSProperties);
      }
    }

    delete props[propName];
  });

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
