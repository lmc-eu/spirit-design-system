import { SpacingStyleProp as DefaultSpacingStyleProp } from '../constants';
import {
  BREAKPOINT_MOBILE,
  BreakpointToken,
  STYLE_SPACING_AUTO,
  SpaceToken,
  StyleProps,
  StyleSpacingAuto,
} from '../types';
import { applyClassNamePrefix } from '../utils';
import { isEmpty } from '../utils/assert';

export type StyleUtilitiesResult = {
  styleUtilities: string[];
  props: StyleProps;
};

const CLASS_SEPARATOR = '-';

// Return just a number from the value if not `auto`
const normalizeSpacingValue = (value: string): string =>
  value === STYLE_SPACING_AUTO ? STYLE_SPACING_AUTO : value.replace(/[^0-9]/g, '');

const isSpaceToken = (value: unknown): value is SpaceToken => typeof value === 'string' && value.startsWith('space-');

const getUtilityValue = (value: string): string => (isSpaceToken(value) ? normalizeSpacingValue(value) : value);

/**
 * Check if the key is included in the object.
 *
 * @param {object} object The object to check in.
 * @param {string} key The key to find.
 * @returns {boolean} `true` if the key is included, `false` otherwise.
 */
const isKeyIncluded = (object: Record<string, unknown>, key: string): boolean => Object.keys(object).includes(key);

const processBreakpointProperties = (
  utilityName: string,
  propValue: Partial<Record<BreakpointToken, string | SpaceToken | StyleSpacingAuto>>,
  prefix: string | null | undefined,
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

const processProperties = (
  utilityName: string,
  propValue: string | Partial<Record<BreakpointToken, string | SpaceToken | StyleSpacingAuto>>,
  prefix: string | null | undefined,
): string[] =>
  typeof propValue === 'string'
    ? [applyClassNamePrefix(prefix)(`${utilityName}-${getUtilityValue(propValue)}`)]
    : processBreakpointProperties(utilityName, propValue, prefix);

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
  prefix: string | null | undefined = '',
  additionalProps: Record<string, string> = {},
): StyleUtilitiesResult => {
  const styleProps = { ...DefaultSpacingStyleProp, ...additionalProps };

  const propEntries = Object.entries(props);
  const styleUtilities = propEntries.reduce((accumulatedUtilities: string[], [key, propValue]) => {
    if (isStylePropProcessable(styleProps, key, propValue)) {
      const utilityName = styleProps[key as keyof typeof styleProps];

      return [...accumulatedUtilities, ...processProperties(utilityName, propValue, prefix)];
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
