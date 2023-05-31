import { path } from 'zx';
import scanner from 'react-scanner';

import { TrackedData } from './types';
import { ROOT_PATH } from './constants';
import { getVersions } from './helpers/versions';

interface ProjectOutput {
  trackedData: TrackedData;
}

type Runner = (config: string, source: string) => Promise<ProjectOutput>;

const getTrackedData = async ({ config, source }: { config: string; source: string }): Promise<ProjectOutput> => {
  const crawlFrom = path.resolve(source) || path.resolve(ROOT_PATH);
  const spiritVersion = await getVersions(crawlFrom);
  // in this case it is usefull to resolve this at runtime
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const scannerConfig = require(config);

  return scanner.run({ ...scannerConfig, crawlFrom }).then((output: string) => {
    return {
      spiritVersion,
      trackedData: output,
    };
  });
};

export const runner: Runner = (config, source) => {
  return getTrackedData({ config, source });
};
