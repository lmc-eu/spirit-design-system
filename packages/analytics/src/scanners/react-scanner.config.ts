import { path } from 'zx';
import { ROOT_PATH } from '../constants';
import processor from '../processors/spiritAdoptionProcessor';

export default {
  crawlFrom: path.resolve(process.cwd(), ROOT_PATH),
  includeSubComponents: true,
  exclude: ['node_modules', 'dist', 'build', 'coverage', 'public', 'vendor', 'storybook-static'],
  processors: [processor],
};
