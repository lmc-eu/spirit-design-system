import { ColorToken, TokenGroup } from '@supernovaio/sdk-exporters';
import { ColorFormat, CSSHelper } from '@supernovaio/export-helpers';
import { formatTokenStyleByOutput, tokenVariableName } from '../helpers/tokenHelper';
import { handleSpecialCase } from '../helpers/specialCaseHelper';
import { normalizeColor } from '../helpers/colorHelper';

type ColorTokenProcessorContext = {
  tokenGroups: Array<TokenGroup>;
  hasParentPrefix: boolean;
  hasJsOutput: boolean;
  tokenPrefix: string;
  hasMixin: boolean;
  mappedTokens: Map<string, unknown>;
};

/**
 * Processes color tokens (with mixin support or CSS variable fallback).
 *
 * @param colorToken - The color token to process
 * @param ctx - Processing context with token groups and output options
 * @returns {string|null} Formatted token style string or null
 */
export const processColorToken = (colorToken: ColorToken, ctx: ColorTokenProcessorContext): string | null => {
  const { tokenGroups, hasParentPrefix, hasJsOutput, tokenPrefix, hasMixin, mappedTokens } = ctx;
  const name = tokenVariableName(colorToken, tokenGroups, hasParentPrefix);
  const cssVariableName = `var(--${tokenPrefix}color-${name})`;

  if (hasMixin) {
    let value = CSSHelper.colorTokenValueToCSS(colorToken.value, mappedTokens as unknown as Map<string, never>, {
      allowReferences: true,
      decimals: 3,
      colorFormat: ColorFormat.hex8,
      tokenToVariableRef: () => '',
    });

    value = handleSpecialCase(name, normalizeColor(value));

    return formatTokenStyleByOutput(name, value, hasJsOutput);
  }

  return hasJsOutput ? formatTokenStyleByOutput(name, cssVariableName, true) : `$${name}: ${cssVariableName};`;
};
