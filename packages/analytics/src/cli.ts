import sade from 'sade';
import { fs, path } from 'zx';
import { errorMessage, infoMessage, __dirname } from './helpers';
import scanner from './scanner';
import { ROOT_PATH } from './constants';

const packageJson = fs.readJsonSync(path.resolve(__dirname, '../package.json'));

export default async function cli(args: string[]) {
  sade('analytics', true)
    .version(packageJson.version)
    .describe(packageJson.description)
    .option('-s, --source', 'Source to scan from')
    .example('-s assets')
    .option('-o, --output', 'Output path for parsed files')
    .example('-o path/to/folder')
    .option('-c --config', 'Path to scanner config')
    .example('-c path/to/scanner.config.js')
    .action(({ output, config, source }) => {
      if (config && !fs.existsSync(config)) {
        errorMessage('Could not find config file');
        process.exit(1);
      } else {
        infoMessage('Using default config file');
        // eslint-disable-next-line no-param-reassign
        config = path.resolve(__dirname, '../react-scanner.config.js');
      }

      if (output && !fs.existsSync(output)) {
        errorMessage('Path does not exists');
        process.exit(1);
      }

      if (source) {
        scanner({ source, outputPath: output, config });
        infoMessage(`Start scanning: ${source}`);
      } else {
        scanner({ source: ROOT_PATH, outputPath: output, config });
        infoMessage('Start scanning from default scope');
      }
    })
    .parse(args);
}
