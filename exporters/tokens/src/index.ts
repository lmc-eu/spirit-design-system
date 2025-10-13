import { AnyOutputFile, PulsarContext, RemoteVersionIdentifier, Supernova } from '@supernovaio/sdk-exporters';
import { exportConfiguration } from '../config';
import { generateOutputFilesByThemes } from './generators/fileGenerator';
import { safeStringify } from './helpers/safeStringify';
import { filterByBrandId } from './filters/brandIdFilter';
import { transformToMap } from './transformers/tokensTransformer';
import { textFileWriter } from './writers/fileWriter';

// https://github.com/Supernova-Studio/exporters/issues/4
// @ts-ignore-next-line
Pulsar.export(async (sdk: Supernova, context: PulsarContext): Promise<Array<AnyOutputFile>> => {
  const { dsId, versionId, brandId } = context;

  // Fetch data from design system that is currently being exported (context)
  const remoteVersionIdentifier: RemoteVersionIdentifier = {
    designSystemId: dsId,
    versionId,
  };

  // Fetch the necessary data
  let tokens = await sdk.tokens.getTokens(remoteVersionIdentifier);
  let tokenGroups = await sdk.tokens.getTokenGroups(remoteVersionIdentifier);
  const themes = await sdk.tokens.getTokenThemes(remoteVersionIdentifier);

  // Filter by brand, if specified by the VSCode extension or pipeline configuration
  if (brandId) {
    tokens = filterByBrandId(tokens, brandId);
    tokenGroups = filterByBrandId(tokenGroups, brandId);
  }

  // Convert all color tokens to CSS variables
  const mappedTokens = transformToMap(tokens);

  const outputFiles = await generateOutputFilesByThemes(tokens, mappedTokens, tokenGroups, themes, sdk);

  // Export the original data only if 'generateOriginalDataFiles' is set to true in config.local.json
  if (exportConfiguration.generateOriginalDataFiles) {
    outputFiles.push({
      path: './original-data/',
      fileName: '_original-tokens.json',
      content: safeStringify(tokens),
    });
    outputFiles.push({
      path: './original-data/',
      fileName: '_original-groups.json',
      content: JSON.stringify(tokenGroups, null, 2),
    });
  }

  // Write all output files
  return textFileWriter(outputFiles);
});
