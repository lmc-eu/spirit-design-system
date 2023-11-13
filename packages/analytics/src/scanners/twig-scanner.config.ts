import { ROOT_PATH, TWIG_CONFIG_FILE, TWIG_CORE_COMPONENTS_PATH, TWIG_OUTPUT_FILE } from '../constants';

export default {
  crawlFrom: ROOT_PATH,
  exclude: ['node_modules', 'dist', 'build', 'coverage', 'public', 'vendor', 'storybook-static'],
  configFile: TWIG_CONFIG_FILE,
  outputFile: TWIG_OUTPUT_FILE,
  coreComponentsPath: TWIG_CORE_COMPONENTS_PATH,
};
