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

export const useStyleUtilities = (
  props: StyleProps,
  prefix: string | null | undefined = '',
  additionalProps: Record<string, string> = {},
): StyleUtilitiesResult => {
  const styleProps = { ...DefaultSpacingStyleProp, ...additionalProps };

  const propEntries = Object.entries(props);
  const styleUtilities = propEntries.reduce((accumulatedUtilities: string[], [key, propValue]) => {
    if (Object.keys(styleProps).includes(key)) {
      const utilityName = styleProps[key as keyof typeof styleProps];

      return [...accumulatedUtilities, ...processProperties(utilityName, propValue, prefix)];
    }

    return accumulatedUtilities;
  }, []);

  const updatedProps = propEntries.reduce((accumulatedProps: StyleProps, [key, propValue]) => {
    if (!Object.keys(styleProps).includes(key)) {
      return { ...accumulatedProps, [key]: propValue };
    }

    return accumulatedProps;
  }, {} as StyleProps);

  return {
    styleUtilities,
    props: updatedProps,
  };
};
