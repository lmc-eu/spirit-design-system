import { FileHelper } from '@supernovaio/export-helpers';
import {
  AnyOutputFile,
  PulsarContext,
  RemoteVersionIdentifier,
  Supernova,
  OutputTextFile,
  TokenType,
} from '@supernovaio/sdk-exporters';
import { ExporterConfiguration } from '../config';
import { generateFiles } from './content/generators/fileGenerator';

// https://github.com/Supernova-Studio/exporters/issues/4
// @ts-ignore-next-line
Pulsar.export(async (sdk: Supernova, context: PulsarContext): Promise<Array<AnyOutputFile>> => {
  const remoteVersionIdentifier: RemoteVersionIdentifier = {
    designSystemId: context.dsId,
    versionId: context.versionId,
  };

  let tokens = await sdk.tokens.getTokens(remoteVersionIdentifier);
  let tokenGroups = await sdk.tokens.getTokenGroups(remoteVersionIdentifier);

  if (context.brandId) {
    tokens = tokens.filter((token) => token.brandId === context.brandId);
    tokenGroups = tokenGroups.filter((tokenGroup) => tokenGroup.brandId === context.brandId);
  }

  const themes = await sdk.tokens.getTokenThemes(remoteVersionIdentifier);
  const mappedTokens = new Map(tokens.map((token) => [token.id, token]));

  const createTextFile = (relativePath: string, fileName: string, content: string): OutputTextFile => {
    return FileHelper.createTextFile({
      relativePath,
      fileName,
      content,
    });
  };

  let outputFiles = [];

  // Separate color tokens from other tokens
  const colorTokens = tokens.filter((token) => token.tokenType === TokenType.color);
  const otherTokens = tokens.filter((token) => token.tokenType !== TokenType.color);

  // Generate global files for other tokens
  const globalFiles = generateFiles(otherTokens, mappedTokens, tokenGroups);
  outputFiles.push(
    ...globalFiles.map((file) => {
      return createTextFile(`./globals/`, file.fileName, file.content);
    }),
  );

  for (const theme of themes) {
    const themedTokens = await sdk.tokens.computeTokensByApplyingThemes(colorTokens, [theme]);
    const themeFiles = generateFiles(themedTokens, mappedTokens, tokenGroups);
    outputFiles.push(
      ...themeFiles.map((file) => {
        return createTextFile(`./themes/${theme.name}/`, file.fileName, file.content);
      }),
    );
  }

  return outputFiles;
});

export const exportConfiguration = Pulsar.exportConfig<ExporterConfiguration>();
