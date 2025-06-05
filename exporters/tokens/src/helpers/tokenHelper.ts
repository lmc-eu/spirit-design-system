import { NamingHelper, StringCase } from '@supernovaio/export-helpers';
import {
  ColorToken,
  DimensionToken,
  GradientToken,
  ShadowToken,
  StringToken,
  Token,
  TokenGroup,
  TokenType,
  TypographyTokenValue,
} from '@supernovaio/sdk-exporters';
import { exportConfiguration } from '../../config';
import { TYPOGRAPHY_SUBSTITUTE_FONT } from '../constants';
import { getDeviceAlias, getDeviceTokenValue } from './deviceHelpers';
import { toCamelCase } from './stringHelper';

export const tokenVariableName = (token: Token, tokenGroups: Array<TokenGroup>, hasParentPrefix: boolean): string => {
  let parent;
  if (hasParentPrefix) {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  } else {
    parent = null;
  }

  const devicePart = getDeviceAlias(token);
  const variableName = NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');

  return devicePart !== '' ? getDeviceTokenValue(variableName, devicePart) : variableName;
};

export const normalizeZeroValueWithUnit = (value: string | number, unit: string): string | number => {
  if (value === 0) {
    return 0;
  }

  return `${value}${unit}`;
};

export const formatTokenStyleByOutput = (name: string, value: string | number, hasJsOutput: boolean, unit?: string) => {
  const normalizedValue = unit ? normalizeZeroValueWithUnit(value, unit) : value;

  if (hasJsOutput) {
    return `export const ${toCamelCase(name)} = ${typeof normalizedValue === 'number' ? normalizedValue : `'${normalizedValue}'`};`;
  }

  return `$${name}: ${normalizedValue} !default;`;
};

export const sortTokens = (
  tokens: Token[],
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  sortByNumValue: boolean,
) => {
  const sortedTokens = tokens.sort((a, b) => {
    if (sortByNumValue) {
      const value = (token: Token) => {
        if (token.tokenType === TokenType.dimension) {
          const dimensionToken = token as DimensionToken;

          return dimensionToken.value.measure;
        }

        if (token.tokenType === TokenType.string) {
          const stringToken = token as StringToken;

          return stringToken.value.text;
        }

        return (token as ColorToken | ShadowToken | GradientToken).value;
      };

      const aNumMatch = value(a);
      const bNumMatch = value(b);

      if (aNumMatch && bNumMatch) {
        return parseInt(aNumMatch.toString(), 10) - parseInt(bNumMatch.toString(), 10);
      }
    }

    const aCompare = tokenVariableName(a, tokenGroups, hasParentPrefix);
    const bCompare = tokenVariableName(b, tokenGroups, hasParentPrefix);

    return aCompare.localeCompare(bCompare);
  });

  return sortedTokens;
};

export const addEmptyLineBetweenTokenGroups = (cssTokens: { css: string | null; parentGroupId: string }[]): string => {
  let lastGroupId: string | null = null;
  const cssWithGroupSpacing: string[] = [];

  cssTokens.forEach(({ css, parentGroupId }) => {
    if (lastGroupId && parentGroupId !== lastGroupId && css) {
      cssWithGroupSpacing.push('');
    }

    if (css) {
      cssWithGroupSpacing.push(css);
    }

    lastGroupId = parentGroupId;
  });

  return cssWithGroupSpacing.join('\n');
};

export const addAngleVarToGradient = (inputString: string): string => {
  // Regex to capture the angle and all color stops (with percentages if any)
  const regex = /linear-gradient\(([^,]+),\s*(.+)\)/;
  const match = inputString.match(regex);

  if (match) {
    const angle = match[1].trim(); // Extract the angle
    const angleValue = Number(angle.match(/\d+/));
    const angleUnit = angle.match(/deg/);
    const colorStops = match[2].trim(); // Extract the rest (color stops)
    const cssAngleVar = '--gradient-angle';

    return `linear-gradient(var(${cssAngleVar}, ${angleValue}${angleUnit}), ${colorStops})`;
  }

  return inputString;
};

const toKebabCase = (value: string) => value.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const removePairQuotes = (input: string): string => {
  const regex = /^'([^']*)'$/;

  return input.replace(regex, '$1');
};

const isNumber = (value: unknown): boolean => typeof value === 'number';

const jsObjectTemplate = (strings: string[]) => `{
${strings.join(',\n')},
}`;

const scssObjectTemplate = (strings: string[]) => `(
${strings.join(',\n')},
)`;

type KeyValueTemplateCallback = (key: string, value: string | number) => string;

type TypographyShape = {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  fontWeight: string;
  lineHeight?: number;
};

const jsKeyValueTemplate: KeyValueTemplateCallback = (key, value) => {
  return `${key}: ${/\s/.test(value as string) ? `"${value}"` : value}`;
};

const scssKeyValueTemplate: KeyValueTemplateCallback = (key, value) => {
  const formattedKey = toKebabCase(key);
  let formattedValue;

  if (typeof value === 'string' && value.includes(', ')) {
    formattedValue = `"${value}"`;
  } else if (isNumber(value)) {
    formattedValue = value;
  } else {
    formattedValue = removePairQuotes(value as string);
  }

  return `${formattedKey}: ${formattedValue}`;
};

const passObjectKeyValueToCallback = <Shape>(object: Shape, callback: KeyValueTemplateCallback) => {
  return Object.entries(object).map((record) => {
    const [key, value] = record;

    return callback(key, value);
  });
};

/**
 * Prepares a set of search-and-replace key-value pairs based on a configuration object.
 *
 * This function generates an object containing `search` and `replace` keys with their
 * corresponding values derived from the configuration object. The keys are dynamically
 * constructed using the provided `name` and `index` parameters.
 *
 * @param {Record<string, unknown>} configuration - The configuration object containing the key-value pairs.
 * @param {string} name - The base name used to construct the dynamic keys.
 * @param {number} index - The index used to construct the dynamic keys.
 * @returns {Record<string, string>} - An object with `search` and `replace` keys and their corresponding values.
 */
const prepareReplacements = (configuration: Record<string, unknown>, name: string, index: number) => {
  return ['search', 'replace'].reduce(
    (acc, key) => ({
      [key]: (configuration?.[`${key}${name}${index}`] as string) || '',
      ...acc,
    }),
    {},
  );
};

/**
 * Generates an array of search-and-replace objects based on a configuration object and a name.
 *
 * This function creates an array of objects, each containing `search` and `replace` keys,
 * by calling the `prepareReplacements` function for a fixed number of iterations (5).
 * The `prepareReplacements` function dynamically constructs the `search` and `replace` values
 * based on the provided configuration and name.
 *
 * @param {Record<string, unknown>} configuration - The configuration object containing key-value pairs.
 * @param {string} name - The base name used to construct dynamic keys for replacements.
 * @returns {Array<{ search: string; replace: string }>} - An array of objects with `search` and `replace` keys.
 */
const getReplacements = (configuration: Record<string, unknown>, name: string) => {
  const replacements: Array<{ search: string; replace: string }> = [...Array(5)].map(
    (_, i) => prepareReplacements(configuration, name, i) as { search: string; replace: string },
  );

  return replacements;
};

/**
 * Replaces occurrences of specific patterns in a string with their corresponding replacements.
 *
 * This function takes a configuration object, a string value, and a name. It retrieves
 * an array of search-and-replace pairs using the `getReplacements` function. Then, it iterates
 * through the replacements and applies them to the input string using regular expressions.
 *
 * @param {Record<string, unknown>} configuration - The configuration object containing replacement rules.
 * @param {string} value - The input string to be processed.
 * @param {string} name - The base name used to retrieve replacement rules.
 * @returns {string} - The processed string with replacements applied.
 */
const override = (configuration: Record<string, unknown>, value: string, name: string): string => {
  // Data defined in exporter pipeline
  const replacements: Array<{ search: string; replace: string }> = getReplacements(configuration, name);

  let replaceable = value;

  for (const { search, replace } of replacements) {
    if (search && replace) {
      replaceable = replaceable.replace(new RegExp(search.trim(), 'g'), replace.trim().replace(/"/g, ''));
    }
  }

  return replaceable;
};

const getExportConfiguration = () => exportConfiguration;

/**
 * Replaces the font family name with a modified version including a substitute font.
 *
 * This function takes a font family name as input and uses the `override` function
 * to replace it with a string that includes the original font family and a substitute font.
 * The replacement rules are defined in the `exportConfiguration` object.
 *
 * @param {string} fontFamily - The name of the font family to be replaced.
 * @returns {string} - The modified font family string with the substitute font included.
 */
const replaceFontName = (fontFamily: string): string => {
  return override(getExportConfiguration(), `'${fontFamily}', ${TYPOGRAPHY_SUBSTITUTE_FONT}`, 'Font');
};

export const typographyValue = (
  { fontFamily, fontSize, fontWeight, lineHeight }: TypographyTokenValue,
  isItalic: boolean,
  hasJsOutput: boolean,
): string => {
  const fontName = replaceFontName(fontFamily.text);

  const typographyObject: TypographyShape = {
    fontFamily: `${fontName}`,
    fontSize: `'${fontSize.measure}${fontSize.unit === 'Pixels' ? 'px' : fontSize.unit}'`,
    fontStyle: `'${isItalic ? 'italic' : 'normal'}'`,
    fontWeight: fontWeight.text,
  };

  if (lineHeight && lineHeight.measure) {
    typographyObject.lineHeight = lineHeight.measure / 100;
  }

  const baseStyles = passObjectKeyValueToCallback<TypographyShape>(typographyObject, scssKeyValueTemplate);
  const baseJsStyles = passObjectKeyValueToCallback<TypographyShape>(typographyObject, jsKeyValueTemplate);

  return hasJsOutput ? jsObjectTemplate(baseJsStyles) : scssObjectTemplate(baseStyles);
};
