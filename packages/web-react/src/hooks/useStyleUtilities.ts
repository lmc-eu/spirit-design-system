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

const normalizeSpacingValue = (value: string): string =>
  value === STYLE_SPACING_AUTO ? STYLE_SPACING_AUTO : value.replace(/[^0-9]/g, '');

const processBreakpointProperties = (
  utilityName: string,
  propValue: Partial<Record<BreakpointToken, string | SpaceToken | StyleSpacingAuto>>,
  prefix: string | null | undefined,
  accumulatedUtilities: string[] = [],
) =>
  Object.keys(propValue).reduce((accumulatedBreakpointUtilities: string[], breakpoint: string) => {
    const breakpointValue = propValue[breakpoint as keyof typeof propValue];

    const utilityValue =
      typeof breakpointValue === 'string' && isSpaceToken(breakpointValue)
        ? normalizeSpacingValue(breakpointValue)
        : breakpointValue;

    const infix = breakpoint === BREAKPOINT_MOBILE ? '' : `${CLASS_SEPARATOR}${breakpoint}`;
    accumulatedBreakpointUtilities.push(
      applyClassNamePrefix(prefix)(`${utilityName}${infix}${CLASS_SEPARATOR}${utilityValue}`),
    );

    return accumulatedBreakpointUtilities;
  }, accumulatedUtilities);

const isSpaceToken = (value: unknown): value is SpaceToken => typeof value === 'string' && value.startsWith('space-');

export function useStyleUtilities(
  props: StyleProps,
  prefix: string | null | undefined = '',
  additionalProps: Record<string, string> = {},
): StyleUtilitiesResult {
  const mergedProps = { ...DefaultSpacingStyleProp, ...additionalProps };

  const propEntries = Object.entries(props);
  const styleUtilities = propEntries.reduce((accumulatedUtilities: string[], [key, propValue]) => {
    if (Object.keys(mergedProps).includes(key)) {
      const utilityName = mergedProps[key as keyof typeof mergedProps];

      if (typeof propValue === 'string') {
        const utilityValue = isSpaceToken(propValue) ? normalizeSpacingValue(propValue) : propValue;

        return [...accumulatedUtilities, applyClassNamePrefix(prefix)(`${utilityName}-${utilityValue}`)];
      }

      if (typeof propValue === 'object' && propValue !== null) {
        return [...accumulatedUtilities, ...processBreakpointProperties(utilityName, propValue, prefix)];
      }
    }

    return accumulatedUtilities;
  }, []);

  const updatedProps = propEntries.reduce((accumulatedProps: StyleProps, [key, propValue]) => {
    if (!Object.keys(mergedProps).includes(key)) {
      return { ...accumulatedProps, [key]: propValue };
    }

    return accumulatedProps;
  }, {} as StyleProps);

  return {
    styleUtilities,
    props: updatedProps,
  };
}
