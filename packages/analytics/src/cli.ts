import sade from 'sade';
import { fs, path } from 'zx';
import { ROOT_PATH } from './constants';
import { _dirname, errorMessage, infoMessage } from './helpers';
import scanner from './scanner';

const packageJson = fs.readJsonSync(path.resolve(_dirname, './package.json'));

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
    .option('-t --type', 'Type of scanner')
    .example('-t react')
    .action(async ({ output, config, source, type }) => {
      let selectedConfig;

      if (config && !fs.existsSync(config)) {
        errorMessage('Could not find config file');
        process.exit(1);
      } else if (config && fs.existsSync(config)) {
        infoMessage(`Using provided config file: ${config}`);
        selectedConfig = path.resolve(process.cwd(), config);
      } else {
        infoMessage('Using default config file');
        selectedConfig = path.resolve(_dirname, './spirit-analytics.config.js');
      }

      if (output && !fs.existsSync(output)) {
        errorMessage('Path does not exists');
        process.exit(1);
      }

      const { default: loadedConfig } = await import(selectedConfig);

      let selectedType: ScannerType = null;

      if (type) {
        selectedType = type;
      }

      if (source) {
        scanner({ source, outputPath: output, config: loadedConfig });
        infoMessage(`Start scanning: ${source}`);
      } else {
        scanner({
          source: path.resolve(process.cwd(), ROOT_PATH),
          outputPath: output,
          config: loadedConfig,
          type: selectedType,
        });
        infoMessage('Start scanning from default scope');
      }
    })
    .parse(args);
}
