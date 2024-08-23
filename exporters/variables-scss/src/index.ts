import { FileHelper } from '@supernovaio/export-helpers';
import {
  AnyOutputFile,
  PulsarContext,
  RemoteVersionIdentifier,
  Supernova,
  OutputTextFile,
} from '@supernovaio/sdk-exporters';
import { ExporterConfiguration } from '../config';
import { generateContent } from './content/generator';

// @ts-ignore-next-line
Pulsar.export(async (sdk: Supernova, context: PulsarContext): Promise<Array<AnyOutputFile>> => {
  // Fetch data from design system that is currently being exported (context)
  const remoteVersionIdentifier: RemoteVersionIdentifier = {
    designSystemId: context.dsId,
    versionId: context.versionId,
  };

  // Fetch the necessary data
  let tokens = await sdk.tokens.getTokens(remoteVersionIdentifier);
  let tokenGroups = await sdk.tokens.getTokenGroups(remoteVersionIdentifier);

  // Filter by brand, if specified by the VSCode extension or pipeline configuration
  if (context.brandId) {
    tokens = tokens.filter((token) => token.brandId === context.brandId);
    tokenGroups = tokenGroups.filter((tokenGroup) => tokenGroup.brandId === context.brandId);
  }

  // Apply theme, if specified by the VSCode extension or pipeline configuration
  if (context.themeId) {
    const themes = await sdk.tokens.getTokenThemes(remoteVersionIdentifier);
    const currentTheme = themes.find((theme) => theme.id === context.themeId);
    if (currentTheme) {
      tokens = await sdk.tokens.computeTokensByApplyingThemes(tokens, [currentTheme]);
    } else {
      // Don't allow applying theme which doesn't exist in the system
      throw new Error('Unable to apply theme which does not exist in the system.');
    }
  }

  // Convert all color tokens to CSS variables
  const mappedTokens = new Map(tokens.map((token) => [token.id, token]));

  function createTextFile(relativePath: string, fileName: string, content: string): OutputTextFile {
    return FileHelper.createTextFile({
      relativePath,
      fileName,
      content,
    });
  }

  const contents = generateContent(tokens, mappedTokens, tokenGroups);

  return [
    ...contents.map((c) => {
      return createTextFile('./', c.fileName, c.content);
    }),
    // only for debugging purposes
    createTextFile(
      './original-data/',
      '_original.json',
      JSON.stringify(
        tokens.map((token) => ({
          tokenType: token.tokenType,
          // @ts-ignore-next-line
          origin: token.origin.name,
          name: token.name,
          // @ts-ignore-next-line
          value: token.value,
        })),
        null,
        2,
      ),
    ),
  ];
});

export const exportConfiguration = Pulsar.exportConfig<ExporterConfiguration>();
