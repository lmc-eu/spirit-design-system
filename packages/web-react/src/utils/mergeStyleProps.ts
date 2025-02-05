import { CSSProperties, HTMLAttributes } from 'react';
import { ElementTypeProp } from '../types';

type MergedStyleProps = {
  className?: string;
  UNSAFE_className?: string;
  style?: CSSProperties;
  UNSAFE_style?: CSSProperties;
};

type StylePropValue =
  | string
  | HTMLAttributes<HTMLElement>
  | {
      className?: string;
      UNSAFE_className?: string;
      style?: CSSProperties;
      UNSAFE_style?: CSSProperties;
      [key: string]: string | CSSProperties | unknown;
    }
  | unknown;

type StyleProp = Record<string, StylePropValue>;

/**
 * Merges class names, styles, and CSS variables from the given properties
 * and determines whether to use standard (`className`, `style`) or unsafe
 * (`UNSAFE_className`, `UNSAFE_style`) attributes based on the component type.
 *
 * @param {ElementTypeProp} ElementTag - The React element type, either a string (HTML tag) or a component.
 * @param {StyleProp} styleProps - An object containing potential class names, styles, and CSS variables.
 * @returns {MergedStyleProps} An object containing either `{ className, style }` or `{ UNSAFE_className, UNSAFE_style }`.
 */
export function mergeStyleProps(ElementTag: ElementTypeProp, styleProps: StyleProp): MergedStyleProps {
  const isSpiritComponent = typeof ElementTag !== 'string' && !!ElementTag?.spiritComponent;

  const isNonNullableObject = (styleProp: StylePropValue): styleProp is StyleProp =>
    typeof styleProp === 'object' && styleProp !== null;

  // Extract class names from the given properties
  const extractClassNames = (styleProp: StylePropValue): string[] => {
    if (typeof styleProp === 'string') {
      return [styleProp];
    }

    if (isNonNullableObject(styleProp)) {
      return [styleProp.className, styleProp.UNSAFE_className].filter(Boolean) as string[];
    }

    return [];
  };

  // Extract CSS variables from the given properties
  const extractCssVariables = (styleProp: StylePropValue): Record<string, string> =>
    isNonNullableObject(styleProp)
      ? Object.entries(styleProp)
          .filter(([key]) => key.startsWith('--'))
          .reduce((extractedCssVariable, [key, value]) => ({ ...extractedCssVariable, [key]: value }), {})
      : {};

  // Extract styles and CSS variables from the given properties
  const extractCssStylesAndVariables = (cssProperties: CSSProperties, styleProp: StylePropValue) => {
    if (!isNonNullableObject(styleProp)) {
      return cssProperties;
    }

    const typedStyleProp = styleProp as { style?: CSSProperties; UNSAFE_style?: CSSProperties };
    const styles = typedStyleProp.style || typedStyleProp.UNSAFE_style || {};
    const cssVariables = extractCssVariables(styleProp);

    return { ...cssProperties, ...styles, ...cssVariables };
  };

  // Merge class names from all relevant properties
  const mergedClasses = Object.values(styleProps).flatMap(extractClassNames).filter(Boolean).join(' ');

  // Merge styles and CSS variables from all relevant properties
  const mergedStyles = Object.values(styleProps)
    .filter(isNonNullableObject)
    .reduce(extractCssStylesAndVariables, {} as CSSProperties);

  return isSpiritComponent
    ? { UNSAFE_className: mergedClasses, UNSAFE_style: mergedStyles }
    : { className: mergedClasses, style: mergedStyles };
}
