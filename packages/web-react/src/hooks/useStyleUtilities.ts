import { SpacingStyleProp as DefaultSpacingStyleProp, DisplayStyleProps } from '../constants';
import {
  BREAKPOINT_MOBILE,
  BreakpointToken,
  STYLE_SPACING_AUTO,
  SpaceToken,
  StyleProps,
  StyleSpacingAuto,
} from '../types';
import { applyClassNamePrefix, isEmpty } from '../utils';

/** The breakpoint property value. */
type BreakpointPropValue = Partial<Record<BreakpointToken, string | SpaceToken | StyleSpacingAuto>>;

/** The nullable string. */
type NullableString = string | null | undefined;

/** The prefix for the class name. */
type ClassNamePrefix = NullableString;

/** The utility name. */
type UtilityName = string;

/** The props shape. */
type PropsShape = Record<string, string>;

/** The style utilities result. */
export type StyleUtilitiesResult = {
  /** The parsed style utilities. */
  styleUtilities: string[];
  /** The updated props. */
  props: StyleProps;
};

const CLASS_SEPARATOR = '-';

/**
 * Normalize the spacing value.
 *
 * @param {string} value - The value to normalize.
 * @returns {string} - Just a number from the value if not `auto.
 */
const normalizeSpacingValue = (value: string): string =>
  value === STYLE_SPACING_AUTO ? STYLE_SPACING_AUTO : value.replace(/[^0-9]/g, '');

const isSpaceToken = (value: unknown): value is SpaceToken => typeof value === 'string' && value.startsWith('space-');

const getUtilityValue = (value: string): string => (isSpaceToken(value) ? normalizeSpacingValue(value) : value);

/**
 * Check if the key is included in the object.
 *
 * @param {object} object - The object to check in.
 * @param {string} key - The key to find.
 * @returns {boolean} - `true` if the key is included, `false` otherwise.
 */
const isKeyIncluded = (object: Record<string, unknown>, key: string): boolean => Object.keys(object).includes(key);

const processBreakpointProperties = (
  utilityName: UtilityName,
  propValue: BreakpointPropValue,
  prefix: ClassNamePrefix,
): string[] =>
  Object.keys(propValue).reduce((accumulatedBreakpointUtilities: string[], breakpoint: string) => {
    const breakpointValue = propValue[breakpoint as keyof typeof propValue];

    if (typeof breakpointValue === 'string') {
      const utilityValue = getUtilityValue(breakpointValue);
      const infix = breakpoint === BREAKPOINT_MOBILE ? '' : `${CLASS_SEPARATOR}${breakpoint}`;
      accumulatedBreakpointUtilities.push(
        applyClassNamePrefix(prefix)(`${utilityName}${infix}${CLASS_SEPARATOR}${utilityValue}`),
      );
    }

    return accumulatedBreakpointUtilities;
  }, []);

/**
 * Process the hideOn property.
 *
 * @param {UtilityName} utilityName - The utility name.
 * @param {BreakpointToken | BreakpointToken[]} propValue - The prop value.
 * @param {ClassNamePrefix} prefix - The prefix.
 * @returns {string[]} - The processed utilities.
 */
const processHideOnProperty = (
  utilityName: UtilityName,
  propValue: BreakpointToken | BreakpointToken[],
  prefix: ClassNamePrefix,
): string[] => {
  const breakpoints = Array.isArray(propValue) ? propValue : [propValue];

  return breakpoints.map((breakpoint) =>
    applyClassNamePrefix(prefix)(
      `${utilityName}${CLASS_SEPARATOR}only${CLASS_SEPARATOR}${breakpoint}${CLASS_SEPARATOR}none`,
    ),
  );
};

/**
 * Process the hideFrom property.
 *
 * @param {UtilityName} utilityName - The utility name.
 * @param {BreakpointToken | BreakpointToken[]} propValue - The prop value.
 * @param {ClassNamePrefix} prefix - The prefix.
 * @returns {string[]} - The processed utilities.
 */
const processHideFromProperty = (
  utilityName: UtilityName,
  propValue: BreakpointToken | BreakpointToken[],
  prefix: ClassNamePrefix,
): string[] => {
  const breakpoint = propValue;
  const infix = breakpoint === BREAKPOINT_MOBILE ? '' : `${CLASS_SEPARATOR}${breakpoint}`;

  return [applyClassNamePrefix(prefix)(`${utilityName}${infix}${CLASS_SEPARATOR}none`)];
};

/**
 * Process the display properties.
 *
 * @param {keyof typeof DisplayStyleProps} utilityKey - The utility key.
 * @param {UtilityName} utilityName - The utility name.
 * @param {BreakpointToken | BreakpointToken[]} propValue - The prop value.
 * @param {ClassNamePrefix} prefix - The prefix.
 * @returns {string[]} - The processed utilities.
 */
const processDisplayProperties = (
  utilityKey: keyof typeof DisplayStyleProps,
  utilityName: UtilityName,
  propValue: BreakpointToken | BreakpointToken[],
  prefix: ClassNamePrefix,
): string[] => {
  switch (utilityKey) {
    case 'hideOn':
      return processHideOnProperty(utilityName, propValue, prefix);
    case 'hideFrom':
      return processHideFromProperty(utilityName, propValue, prefix);
    default:
      return [];
  }
};

/**
 * Process the properties.
 *
 * @param {keyof typeof DefaultSpacingStyleProp | keyof typeof DisplayStyleProps} utilityKey - The utility key.
 * @param {UtilityName} utilityName - The utility name.
 * @param {string | BreakpointPropValue | BreakpointToken | BreakpointToken[]} propValue - The prop value.
 * @param {ClassNamePrefix} prefix - The prefix.
 * @returns {string[]} - The processed utilities.
 */
const processProperties = (
  utilityKey: keyof typeof DefaultSpacingStyleProp | keyof typeof DisplayStyleProps,
  utilityName: UtilityName,
  propValue: string | boolean | BreakpointPropValue | BreakpointToken | BreakpointToken[],
  prefix: ClassNamePrefix,
): string[] => {
  if (utilityKey in DisplayStyleProps) {
    return processDisplayProperties(
      utilityKey as keyof typeof DisplayStyleProps,
      utilityName,
      propValue as BreakpointToken | BreakpointToken[],
      prefix,
    );
  }

  if (typeof propValue === 'boolean') {
    return propValue ? [applyClassNamePrefix(prefix)(utilityName)] : [];
  }

  if (typeof propValue === 'string') {
    return [applyClassNamePrefix(prefix)(`${utilityName}-${getUtilityValue(propValue)}`)];
  }

  return processBreakpointProperties(utilityName, propValue as BreakpointPropValue, prefix);
};

type IsStylePropProcessableOptions = {
  /** The flag to check if the key should be included in the styleProp or not. */
  includesKey?: boolean;
};

/**
 * Check if style prop is ready to be processed, i.e. the key exists and the value is not `null`.
 * If the key is a style prop and the value is not `null`, process the properties.
 *
 * Beware of the disabling style prop using `undefined` value.
 * Setting the value conditionally in the React is not that simple.
 *
 * @example
 * ```diff
 * ---  marginBottom={!showTogglerAfterCollapse ? 'space-300' : undefined} // Incorrect
 * +++  {...(!showTogglerAfterCollapse && { marginBottom: 'space-300' })}  // Correct
 * ```
 * @param {PropsShape} styleProps - The style props object.
 * @param {string} stylePropKey - The style prop key.
 * @param {NullableString} stylePropValue - The style prop value.
 * @param {IsStylePropProcessableOptions} options - The options object
 * @param {boolean} options.includesKey - The flag to check if the key should be included in the styleProp or not.
 * @returns {boolean} - `true` if the style prop is processable, `false` otherwise.
 */
const isStylePropProcessable = (
  styleProps: PropsShape,
  stylePropKey: string,
  stylePropValue: NullableString,
  options: IsStylePropProcessableOptions = { includesKey: true },
): boolean => {
  const isStylePropKeyIncluded = isKeyIncluded(styleProps, stylePropKey);
  const isProcessable =
    (options.includesKey ? isStylePropKeyIncluded : !isStylePropKeyIncluded) && !isEmpty(stylePropValue);

  return isProcessable;
};

export const useStyleUtilities = (
  props: StyleProps,
  prefix: ClassNamePrefix = '',
  additionalProps: PropsShape = {},
): StyleUtilitiesResult => {
  const styleProps = { ...DefaultSpacingStyleProp, ...DisplayStyleProps, ...additionalProps };

  const propEntries = Object.entries(props);
  const styleUtilities = propEntries.reduce((accumulatedUtilities: string[], [key, propValue]) => {
    if (isStylePropProcessable(styleProps, key, propValue)) {
      const utilityName = styleProps[key as keyof typeof styleProps];

      return [
        ...accumulatedUtilities,
        ...processProperties(key as keyof typeof styleProps, utilityName, propValue, prefix),
      ];
    }

    return accumulatedUtilities;
  }, []);

  const updatedProps = propEntries.reduce((accumulatedProps: StyleProps, [key, propValue]) => {
    if (isStylePropProcessable(styleProps, key, propValue, { includesKey: false })) {
      return { ...accumulatedProps, [key]: propValue };
    }

    return accumulatedProps;
  }, {} as StyleProps);

  return {
    styleUtilities,
    props: updatedProps,
  };
};
