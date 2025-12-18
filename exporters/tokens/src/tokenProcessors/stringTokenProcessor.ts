import { StringToken, TokenGroup } from '@supernovaio/sdk-exporters';
import { formatTokenStyleByOutput, tokenVariableName } from '../helpers/tokenHelper';
import { handleSpecialCase } from '../helpers/specialCaseHelper';

type StringTokenProcessorContext = {
  tokenGroups: Array<TokenGroup>;
  hasParentPrefix: boolean;
  hasJsOutput: boolean;
};

/**
 * Processes string tokens (simple text values).
 *
 * @param stringToken - The string token to process
 * @param ctx - Processing context with token groups and output options
 * @returns {string|null} Formatted token style string or null
 */
export const processStringToken = (stringToken: StringToken, ctx: StringTokenProcessorContext): string | null => {
  const { tokenGroups, hasParentPrefix, hasJsOutput } = ctx;
  const name = tokenVariableName(stringToken, tokenGroups, hasParentPrefix);
  let value = stringToken.value.text;
  value = handleSpecialCase(name, value);

  return formatTokenStyleByOutput(name, value, hasJsOutput);
};
