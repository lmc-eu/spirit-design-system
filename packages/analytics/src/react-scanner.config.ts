import { ROOT_PATH } from './constants';
import processor from './processors/spiritAdoptionProcessor';

export default {
  crawlFrom: ROOT_PATH,
  includeSubComponents: true,
  exclude: ['node_modules', 'dist', 'build', 'coverage', 'public', 'vendor', 'storybook-static'],
  processors: [processor],
};
