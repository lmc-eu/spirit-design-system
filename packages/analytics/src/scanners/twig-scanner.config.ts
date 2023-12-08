import {
  OUTPUT_DIR,
  ROOT_PATH,
  TWIG_CONFIG_FILE,
  TWIG_CORE_COMPONENTS_PATH,
  TWIG_OUTPUT_FILE_NAME,
} from '../constants';
import { timestamp } from '../helpers';

export default {
  crawlFrom: ROOT_PATH,
  exclude: ['node_modules', 'dist', 'build', 'coverage', 'public', 'vendor', 'storybook-static'],
  configFile: TWIG_CONFIG_FILE,
  outputFile: `${OUTPUT_DIR}/${TWIG_OUTPUT_FILE_NAME}-${timestamp()}.json`,
  coreComponentsPath: TWIG_CORE_COMPONENTS_PATH,
};
