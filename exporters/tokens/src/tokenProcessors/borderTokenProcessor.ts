import { BorderToken, BorderWidthToken, TokenGroup } from '@supernovaio/sdk-exporters';
import { CSSHelper } from '@supernovaio/export-helpers';
import { formatTokenStyleByOutput, tokenVariableName } from '../helpers/tokenHelper';
import { handleSpecialCase } from '../helpers/specialCaseHelper';

type BorderTokenProcessorContext = {
  tokenGroups: Array<TokenGroup>;
  hasParentPrefix: boolean;
  hasJsOutput: boolean;
};

/**
 * Processes border and borderWidth tokens (no rem conversion).
 *
 * @param borderToken - The border or borderWidth token to process
 * @param ctx - Processing context with token groups and output options
 * @returns {string|null} Formatted token style string or null
 */
export const processBorderToken = (
  borderToken: BorderToken | BorderWidthToken,
  ctx: BorderTokenProcessorContext,
): string | null => {
  const { tokenGroups, hasParentPrefix, hasJsOutput } = ctx;
  const name = tokenVariableName(borderToken, tokenGroups, hasParentPrefix);
  let value: number | undefined;

  if ('width' in borderToken.value && borderToken.value.width) {
    value = borderToken.value.width.measure;
  } else if ('measure' in borderToken.value) {
    value = borderToken.value.measure;
  }

  if (value === undefined) {
    return null;
  }

  const processedNumber = handleSpecialCase(name, value);
  let rawUnit: string | undefined;
  if ('width' in borderToken.value && borderToken.value.width) {
    rawUnit = borderToken.value.width.unit;
  } else if ('measure' in borderToken.value && borderToken.value.unit) {
    rawUnit = borderToken.value.unit;
  }
  const unit = rawUnit ? CSSHelper.unitToCSS(rawUnit) : undefined;

  return formatTokenStyleByOutput(name, processedNumber, hasJsOutput, unit, false);
};
