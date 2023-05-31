import { fs } from 'zx';
import { errorMessage, infoMessage, timestamp, getOutputPath } from './helpers';
import { runner } from './runner';

interface BaseArgs {
  outputPath: string;
  config: string;
  folder?: string;
}

interface Args extends BaseArgs {
  source: string;
}

export const getRunnerCall = async ({ outputPath, config, source }: Args) => {
  await runner(config, source).then((result) => {
    if (outputPath) {
      fs.writeFile(getOutputPath(outputPath, timestamp()), JSON.stringify(result, null, 2), 'utf8').then(() => {
        infoMessage(`Successfully created ${timestamp()}.json file in the ${outputPath}`);
      });
    } else {
      // @TODO: Make API call
      // https://jira.lmc.cz/browse/DS-559
    }
  });
};

async function scanner({ source, outputPath, config }: Args) {
  try {
    await getRunnerCall({ outputPath, config, source });
  } catch (err) {
    errorMessage(`\n ${err}`);
  }
}

export default scanner;
