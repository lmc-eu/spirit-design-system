import { path } from 'zx';
import { ROOT_PATH } from './constants';
import { _dirname } from './helpers';
import { getVersions } from './helpers/versions';
import reactScanner from './scanners/reactScanner';
import twigScanner from './scanners/twigScanner';
import { RunnerConfig, ScannerType, TrackedData } from './types';

interface ProjectOutput {
  spiritVersion: string;
  trackedData: TrackedData;
}

type Runner = (config: RunnerConfig, source: string, type: ScannerType) => Promise<ProjectOutput>;

const getTrackedData = async ({
  config,
  source,
  type,
}: {
  config: RunnerConfig;
  source: string;
  type: ScannerType;
}): Promise<ProjectOutput> => {
  const crawlFrom = path.resolve(source) || path.resolve(_dirname, ROOT_PATH);
  const spiritVersion = await getVersions(crawlFrom);
  let reactOutput = {};
  let twigOutput = {};

  if (type === 'react' || type === null) {
    reactOutput = await reactScanner({ ...config.react, crawlFrom });
  }

  if (type === 'twig' || type === null) {
    twigOutput = await twigScanner({ ...config.twig, crawlFrom });
  }

  return {
    spiritVersion,
    trackedData: {
      react: reactOutput,
      twig: twigOutput,
    },
  };
};

export const runner: Runner = (config, source, type) => getTrackedData({ config, source, type });
