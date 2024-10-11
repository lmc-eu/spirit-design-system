import SupernovaSDK from '@supernovaio/sdk';
import { themesDataBckp } from './data/themes-data-bckp';
import { tokensDataBckp } from './data/tokens-data-bckp';

const apiKey = '';
const sdk = new SupernovaSDK.Supernova(apiKey);

const themedTokens = await sdk.tokens.computeTokensByApplyingThemes([], tokensDataBckp, themesDataBckp);

console.log(themedTokens);
