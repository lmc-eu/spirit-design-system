import { GradientToken, TokenGroup } from '@supernovaio/sdk-exporters';
import { ColorFormat, CSSHelper } from '@supernovaio/export-helpers';
import { addAngleVarToGradient, formatTokenStyleByOutput, tokenVariableName } from '../helpers/tokenHelper';
import { transformColorsToVariables, findAllHexColorsInStringAndNormalize } from '../helpers/colorHelper';

type GradientTokenProcessorContext = {
  tokenGroups: Array<TokenGroup>;
  hasParentPrefix: boolean;
  hasJsOutput: boolean;
  tokenPrefix: string;
  mappedTokens: Map<string, unknown>;
};

/**
 * Processes gradient tokens (with angle variable and color variable transformation).
 *
 * @param gradientToken - The gradient token to process
 * @param ctx - Processing context with token groups, prefix, and output options
 * @returns {string|null} Formatted token style string or null
 */
export const processGradientToken = (
  gradientToken: GradientToken,
  ctx: GradientTokenProcessorContext,
): string | null => {
  const { tokenGroups, hasParentPrefix, hasJsOutput, tokenPrefix, mappedTokens } = ctx;
  const name = tokenVariableName(gradientToken, tokenGroups, hasParentPrefix);
  const { value, origin } = gradientToken;
  const groupName = hasParentPrefix ? undefined : origin?.name?.split('/')[0].toLowerCase();

  let gradient = CSSHelper.gradientTokenValueToCSS(value, mappedTokens as unknown as Map<string, never>, {
    allowReferences: true,
    colorFormat: ColorFormat.hashHex8,
    decimals: 3,
    tokenToVariableRef: () => '',
  });

  gradient = addAngleVarToGradient(gradient);
  gradient = transformColorsToVariables(name, gradient, tokenPrefix, groupName); // add color variables
  gradient = findAllHexColorsInStringAndNormalize(gradient); // find hex codes and normalize them

  return formatTokenStyleByOutput(name, gradient, hasJsOutput);
};
