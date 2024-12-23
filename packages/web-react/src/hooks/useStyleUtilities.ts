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

const processBreakpointProperties = (
  utilityName: string,
  propValue: Partial<Record<BreakpointToken, SpaceToken | StyleSpacingAuto>>,
  prefix: string | null | undefined,
  accumulatedUtilities: string[] = [],
) =>
  Object.keys(propValue).reduce((accumulatedBreakpointUtilities: string[], breakpoint: string) => {
    const breakpointValue = propValue[breakpoint as keyof typeof propValue];
    const utilityValue = normalizeSpacingValue(breakpointValue as string);
    const infix = breakpoint === BREAKPOINT_MOBILE ? '' : `${CLASS_SEPARATOR}${breakpoint}`;
    accumulatedBreakpointUtilities.push(
      applyClassNamePrefix(prefix)(`${utilityName}${infix}${CLASS_SEPARATOR}${utilityValue}`),
    );

    return accumulatedBreakpointUtilities;
  }, accumulatedUtilities);

export function useStyleUtilities(
  props: StyleProps,
  prefix: string | null | undefined = '',
  additionalSpacingProps: Record<string, string> = {},
): StyleUtilitiesResult {
  const SpacingStyleProp = { ...DefaultSpacingStyleProp, ...additionalSpacingProps };

  const propEntries = Object.entries(props);
  const styleUtilities = propEntries.reduce((accumulatedUtilities: string[], [key, propValue]) => {
    if (Object.keys(SpacingStyleProp).includes(key)) {
      const utilityName = SpacingStyleProp[key as keyof typeof SpacingStyleProp];

      if (typeof propValue === 'object' && propValue !== null) {
        return [...accumulatedUtilities, ...processBreakpointProperties(utilityName, propValue, prefix)];
      }

      if (propValue) {
        const utilityValue = normalizeSpacingValue(propValue as string);

        return [
          ...accumulatedUtilities,
          applyClassNamePrefix(prefix)(`${utilityName}${CLASS_SEPARATOR}${utilityValue}`),
        ];
      }
    }

    return accumulatedUtilities;
  }, []);

  const updatedProps = propEntries.reduce((accumulatedProps: StyleProps, [key, propValue]) => {
    if (!Object.keys(SpacingStyleProp).includes(key)) {
      return { ...accumulatedProps, [key]: propValue };
    }

    return accumulatedProps;
  }, {} as StyleProps);

  return {
    styleUtilities,
    props: updatedProps,
  };
}
