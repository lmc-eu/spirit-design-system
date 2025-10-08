import { Token, TokenGroup, TokenType, TypographyToken, type TypographyTokenValue } from '@supernovaio/sdk-exporters';
import {
  formatTypographyName,
  getBreakpoint,
  getTokenAlias,
  normalizeFirstNamePart,
  deepMergeObjects,
} from '../helpers/objectHelper';
import { getDeviceAlias } from '../helpers/deviceHelpers';
import { sortTokens, tokenVariableName, typographyValue } from '../helpers/tokenHelper';
import { toCamelCase, toPlural } from '../helpers/stringHelper';
import { COLOR_JS_SUFFIX, COLOR_KEY, COLOR_SCSS_SUFFIX, TYPOGRAPHY_KEY } from '../constants';

export type StylesObjectType = { [key: string]: (string | object) & { moveToTheEnd?: string } };

type FontSizeUnit = NonNullable<TypographyTokenValue['fontSize']>['unit'];
type LineHeightUnit = NonNullable<TypographyTokenValue['lineHeight']>['unit'];
type TypographyUnit = FontSizeUnit | LineHeightUnit;

export type DeviceDimensionValue = {
  measure: number;
  unit: TypographyUnit;
};

export type DeviceDimensionEntries = Record<string, DeviceDimensionValue>;

export type DeviceDimensionMap = Map<string, DeviceDimensionEntries>;

type CloneableTypographyField = keyof Pick<
  TypographyTokenValue,
  | 'fontFamily'
  | 'fontWeight'
  | 'fontSize'
  | 'textDecoration'
  | 'textCase'
  | 'letterSpacing'
  | 'lineHeight'
  | 'paragraphIndent'
  | 'paragraphSpacing'
>;

const CLONABLE_TYPOGRAPHY_FIELDS: CloneableTypographyField[] = [
  'fontFamily',
  'fontWeight',
  'fontSize',
  'textDecoration',
  'textCase',
  'letterSpacing',
  'lineHeight',
  'paragraphIndent',
  'paragraphSpacing',
];

export const cloneTypographyValue = (value: TypographyTokenValue): TypographyTokenValue => {
  const clonedValue: TypographyTokenValue = { ...value };

  CLONABLE_TYPOGRAPHY_FIELDS.forEach((key) => {
    const fieldValue = value[key];

    if (fieldValue) {
      clonedValue[key] = { ...fieldValue } as TypographyTokenValue[typeof key];
    }
  });

  clonedValue.referencedTokenId = value.referencedTokenId ?? null;

  return clonedValue;
};

const applyDeviceDimension = (
  clonedValue: TypographyTokenValue,
  deviceValues: DeviceDimensionEntries | undefined,
  device: string,
  key: 'fontSize' | 'lineHeight',
) => {
  const deviceDimension = deviceValues?.[device];

  if (!deviceDimension) {
    return;
  }

  const existingDimension = clonedValue[key];

  clonedValue[key] = {
    ...existingDimension,
    measure: deviceDimension.measure,
    unit: deviceDimension.unit,
  };
};

const getDeviceTypographyValues = (
  typographyToken: TypographyToken,
  deviceDimensions?: DeviceDimensionMap,
): Map<string, TypographyTokenValue> | null => {
  if (!deviceDimensions) {
    return null;
  }

  const { fontSize, lineHeight } = typographyToken.value;
  const fontSizeReferenceId = fontSize?.referencedTokenId;
  const lineHeightReferenceId = lineHeight?.referencedTokenId;
  const fontSizeDevices = fontSizeReferenceId ? deviceDimensions.get(fontSizeReferenceId) : undefined;
  const lineHeightDevices = lineHeightReferenceId ? deviceDimensions.get(lineHeightReferenceId) : undefined;

  if (!fontSizeDevices && !lineHeightDevices) {
    return null;
  }

  const devices = new Set<string>();
  const addDeviceKeys = (deviceValues?: Record<string, unknown>) => {
    if (!deviceValues) {
      return;
    }

    Object.keys(deviceValues).forEach((device) => devices.add(device));
  };

  addDeviceKeys(fontSizeDevices);
  addDeviceKeys(lineHeightDevices);

  if (devices.size === 0) {
    return null;
  }

  const deviceTypographyMap = Array.from(devices).reduce<Map<string, TypographyTokenValue>>((accumulator, device) => {
    const clonedValue = cloneTypographyValue(typographyToken.value);

    applyDeviceDimension(clonedValue, fontSizeDevices, device, 'fontSize');
    applyDeviceDimension(clonedValue, lineHeightDevices, device, 'lineHeight');

    accumulator.set(device, clonedValue);

    return accumulator;
  }, new Map<string, TypographyTokenValue>());

  return deviceTypographyMap.size > 0 ? deviceTypographyMap : null;
};

export const handleTypographyTokens = (
  tokenNameParts: string[],
  token: Token,
  stylesObjectRef: StylesObjectType,
  hasJsOutput: boolean,
  deviceDimensions?: DeviceDimensionMap,
): void => {
  const typographyToken = token as TypographyToken;
  const reducedNameParts = tokenNameParts.slice(0, 2);
  const name = formatTypographyName(tokenNameParts).toLowerCase();
  const breakpoint = getBreakpoint(tokenNameParts).toLowerCase();
  const isItalic = name.includes('italic');
  const deviceTypographyValues = getDeviceTypographyValues(typographyToken, deviceDimensions);

  let currentObject = stylesObjectRef;
  reducedNameParts.forEach((part, index) => {
    const tokenName = hasJsOutput ? toCamelCase(name) : `$${name}`;
    const modifiedPart = index === 0 ? tokenName : part;

    if (index === reducedNameParts.length - 1) {
      if (deviceTypographyValues) {
        const baseFontSize = typographyToken.value.fontSize?.measure;
        const baseLineHeight = typographyToken.value.lineHeight?.measure;
        const hasDeviceVariation = Array.from(deviceTypographyValues.values()).some((value) => {
          const deviceFontSize = value.fontSize?.measure;
          const deviceLineHeight = value.lineHeight?.measure;

          return (
            (deviceFontSize !== undefined && baseFontSize !== undefined && deviceFontSize !== baseFontSize) ||
            (deviceLineHeight !== undefined && baseLineHeight !== undefined && deviceLineHeight !== baseLineHeight)
          );
        });

        if (hasDeviceVariation) {
          const deviceKeys = Array.from(deviceTypographyValues.keys());

          const ensureDevice = (device: string) => {
            if (device && !deviceKeys.includes(device)) {
              deviceKeys.push(device);
            }
          };

          ensureDevice(breakpoint);
          ensureDevice('mobile');

          deviceKeys.forEach((device) => {
            const deviceValue =
              deviceTypographyValues.get(device) ||
              (device === 'mobile' || device === breakpoint ? cloneTypographyValue(typographyToken.value) : undefined);

            if (!deviceValue) {
              return;
            }

            currentObject[device] = typographyValue(deviceValue, isItalic, hasJsOutput);
          });

          return;
        }
      }

      currentObject[breakpoint] = typographyValue(typographyToken.value, isItalic, hasJsOutput);
    } else {
      currentObject[modifiedPart] = currentObject[modifiedPart] || {};
      currentObject = currentObject[modifiedPart] as StylesObjectType;
    }
  });
};

export const handleNonTypographyTokens = (
  tokenNameParts: string[],
  token: Token,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  stylesObjectRef: StylesObjectType,
  hasJsOutput = false,
): void => {
  let currentObject = stylesObjectRef;

  tokenNameParts.forEach((part, index) => {
    const modifiedPart = index === 0 ? normalizeFirstNamePart(part, token.tokenType, hasJsOutput) : part;

    if (index === tokenNameParts.length - 1) {
      const tokenValue = hasJsOutput
        ? `${toCamelCase(tokenVariableName(token, tokenGroups, hasParentPrefix))}`
        : `$${tokenVariableName(token, tokenGroups, hasParentPrefix)}`;
      const tokenAlias = getTokenAlias(token, hasJsOutput);
      const rootTokenAlias = hasJsOutput ? toPlural(tokenAlias) : `$${toPlural(tokenAlias)}`;
      const devicePart = hasJsOutput ? toCamelCase(getDeviceAlias(token)) : getDeviceAlias(token).toLowerCase();

      if (devicePart !== '') {
        currentObject[index === 0 ? rootTokenAlias : tokenAlias] = { [devicePart]: tokenValue };
      } else {
        currentObject[tokenAlias] = tokenValue;
      }
    } else {
      currentObject[hasJsOutput ? toCamelCase(modifiedPart) : modifiedPart] = currentObject[modifiedPart] || {};
      currentObject = currentObject[hasJsOutput ? toCamelCase(modifiedPart) : modifiedPart] as StylesObjectType;
    }
  });
};

export const createStylesObjectStructureFromTokenNameParts = (
  token: Token,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  stylesObjectRef: StylesObjectType,
  hasJsOutput: boolean,
  deviceDimensions?: DeviceDimensionMap,
): StylesObjectType => {
  const { tokenType, name: tokenName } = token;
  const devicePart = getDeviceAlias(token);
  let tokenNameParts: string[] = token.origin?.name?.split('/') || [];

  if (tokenNameParts.length <= 1) {
    if (devicePart) {
      tokenNameParts = [tokenName];
    } else {
      return stylesObjectRef;
    }
  }

  if (tokenType === TokenType.typography) {
    handleTypographyTokens(tokenNameParts, token, stylesObjectRef, hasJsOutput, deviceDimensions);
  } else {
    handleNonTypographyTokens(tokenNameParts, token, tokenGroups, hasParentPrefix, stylesObjectRef, hasJsOutput);
  }

  return stylesObjectRef;
};

export const parseGroupName = (colorVariable: string, hasJsOutput: boolean) => {
  const suffix = hasJsOutput ? COLOR_JS_SUFFIX : COLOR_SCSS_SUFFIX;

  return colorVariable.replace(suffix, '').replace('$', '');
};

export const colorGroupsReducer = (accumulatedColorKeys: { [key: string]: string }, currentColorKey: string) => ({
  ...accumulatedColorKeys,
  [parseGroupName(currentColorKey, false)]: currentColorKey,
});

export const typographyGroupReducer = (
  accumulatedTypographyKeys: { [key: string]: string },
  currentTypographyKey: string,
) => ({
  ...accumulatedTypographyKeys,
  [parseGroupName(currentTypographyKey, false)]: currentTypographyKey,
});

export const createGlobalColorsObject = (colorKeys: Array<string>, hasJsOutput: boolean) => {
  return colorKeys.reduce((accumulatedColorKeys: { [key: string]: string }, currentColorKey: string) => {
    return {
      ...accumulatedColorKeys,
      [parseGroupName(currentColorKey, hasJsOutput)]: currentColorKey,
    };
  }, {});
};

export const createGlobalTypographyObject = (typographyKeys: Array<string>) => {
  return typographyKeys.reduce(typographyGroupReducer, {});
};

// TODO: refactor this function to not use cssObject reference
export const generateStylesObjectFromTokens = (
  tokens: Array<Token>,
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  hasJsOutput: boolean,
  sortByNumValue: boolean,
  deviceDimensions?: DeviceDimensionMap,
): StylesObjectType => {
  const sortedTokens = sortTokens(tokens, tokenGroups, hasParentPrefix, sortByNumValue);
  const stylesObject = sortedTokens.reduce((stylesObjectAccumulator, token) => {
    const currentObject = createStylesObjectStructureFromTokenNameParts(
      token,
      tokenGroups,
      hasParentPrefix,
      {},
      hasJsOutput,
      deviceDimensions,
    );

    // Merge the current object into the accumulator
    return deepMergeObjects(stylesObjectAccumulator, currentObject);
  }, {});

  // check if there are any color keys in the object
  const colorKeys = Object.keys(stylesObject).filter((key) => {
    return key.endsWith(hasJsOutput ? COLOR_JS_SUFFIX : COLOR_SCSS_SUFFIX);
  });

  /* if there are color keys, create a separate global object for
  all colors keys and place it at the end of the file */
  if (colorKeys.length > 0) {
    const colorsObject = createGlobalColorsObject(colorKeys, hasJsOutput);
    const key = hasJsOutput ? COLOR_KEY : `$${COLOR_KEY}`;

    return { ...stylesObject, [key]: colorsObject };
  }

  const typographyKeys = Object.keys(stylesObject).filter((key) => key.includes('heading') || key.includes('body'));

  if (typographyKeys.length > 0) {
    const typographyObject = createGlobalTypographyObject(typographyKeys);
    const key = hasJsOutput ? TYPOGRAPHY_KEY : `$${TYPOGRAPHY_KEY}`;

    // Typography has multiple groups, which creates multiple '$styles' objects.
    // After merging the '$styles' objects together, they remain in the middle of the tokens,
    // so we need to move them to the end of the file using the 'moveToTheEnd' flag,
    // which will be removed in the final output.
    return { ...stylesObject, [key]: { ...typographyObject, moveToTheEnd: 'true' } };
  }

  return stylesObject;
};
