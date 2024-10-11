import { FileHelper } from '@supernovaio/export-helpers';
import {
  AnyOutputFile,
  OutputTextFile,
  PulsarContext,
  RemoteVersionIdentifier,
  Supernova,
} from '@supernovaio/sdk-exporters';
import { themesData } from './data/themes-data';
import { tokensData } from './data/tokens-data';

// https://github.com/Supernova-Studio/exporters/issues/4
// @ts-ignore-next-line
Pulsar.export(async (sdk: Supernova, context: PulsarContext): Promise<Array<AnyOutputFile>> => {
  // Fetch data from design system that is currently being exported (context)
  const remoteVersionIdentifier: RemoteVersionIdentifier = {
    designSystemId: context.dsId,
    versionId: context.versionId,
  };

  // Fetch the necessary data
  let tokens = tokensData;

  // Filter by brand, if specified by the VSCode extension or pipeline configuration
  if (context.brandId) {
    tokens = tokens.filter((token) => token.brandId === context.brandId);
  }

  // Convert all color tokens to CSS variables
  // const themes = await sdk.tokens.getTokenThemes(remoteVersionIdentifier);
  const themes = themesData;

  const createTextFile = (relativePath: string, fileName: string, content: string): OutputTextFile => {
    return FileHelper.createTextFile({
      relativePath,
      fileName,
      content,
    });
  };

  const textFiles: Array<OutputTextFile> = [];

  const allThemes = await Promise.all(
    themes.map(async (theme) => {
      const themedTokens = await sdk.tokens.computeTokensByApplyingThemes(tokens, [theme]);

      return { themedTokens, theme };
    }),
  );

  textFiles.push(createTextFile('./original-data/', '_original-groups.json', JSON.stringify(allThemes, null, 2)));

  return textFiles;
});
