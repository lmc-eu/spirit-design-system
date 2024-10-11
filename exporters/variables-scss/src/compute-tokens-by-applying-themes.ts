import SupernovaSDK from '@supernovaio/sdk';
import { themesData } from './data/themes-data';
import { tokensDataBckp } from './data/tokens-data-bckp';

const apiKey = '';
const sdk = new SupernovaSDK.Supernova(apiKey);

const allThemes = await Promise.all(
  themesData.map(async (theme) => {
    const themedTokens = await sdk.tokens.computeTokensByApplyingThemes(tokensDataBckp, [theme]);

    return { themedTokens, theme };
  }),
);

console.log(allThemes);
