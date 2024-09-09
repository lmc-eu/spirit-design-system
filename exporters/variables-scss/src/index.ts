import { FileHelper } from '@supernovaio/export-helpers';
import {
  AnyOutputFile,
  PulsarContext,
  RemoteVersionIdentifier,
  Supernova,
  OutputTextFile,
} from '@supernovaio/sdk-exporters';
import { ExporterConfiguration } from '../config';
import { generateOutputFilesByThemes } from './generators/fileGenerator';

// https://github.com/Supernova-Studio/exporters/issues/4
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

  // Convert all color tokens to CSS variables
  const mappedTokens = new Map(tokens.map((token) => [token.id, token]));
  const themes = await sdk.tokens.getTokenThemes(remoteVersionIdentifier);

  const createTextFile = (relativePath: string, fileName: string, content: string): OutputTextFile => {
    return FileHelper.createTextFile({
      relativePath,
      fileName,
      content,
    });
  };

  let textFiles: Array<OutputTextFile> = [];
  const outputFilesData = await generateOutputFilesByThemes(tokens, mappedTokens, tokenGroups, themes, sdk);
  textFiles = outputFilesData.map((file) => {
    return createTextFile(file.path, file.fileName, file.content);
  });

  // TODO: Only for debugging purposes, remove for production!
  const safeStringify = (obj: object) => {
    let cache: string[] | null = [];
    const str = JSON.stringify(
      obj,
      (key, value) => {
        if (typeof value === 'object' && value !== null) {
          if (cache?.includes(value)) {
            return 'CIRCULAR_REFERENCE';
          }
          cache?.push(value);
        }

        return value;
      },
      2,
    );
    cache = null;

    return str;
  };

  // TODO: Only for debugging purposes - remove for production!
  textFiles.push(
    createTextFile('./original-data/', '_original-tokens.json', safeStringify(tokens)),
    createTextFile('./original-data/', '_original-groups.json', JSON.stringify(tokenGroups, null, 2)),
  );

  return textFiles;
});

export const exportConfiguration = Pulsar.exportConfig<ExporterConfiguration>();
