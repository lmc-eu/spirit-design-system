/* @jest-environment node */

import { resolve } from 'path';
import { pathToFileURL } from 'url';
import { sync } from 'glob';
import { runSass } from 'sass-true';

const importers = [
  // Make @tokens work
  {
    findFileUrl(url) {
      if (!url.startsWith('@')) {
        return null;
      }

      return new URL(
        pathToFileURL(resolve(process.cwd(), '../../node_modules/@lmc-eu/spirit-design-tokens/src/scss', url)),
      );
    },
  },
];

describe('Sass', () => {
  const sassTestFiles = sync(resolve(process.cwd(), 'src/**/*.test.scss'));

  sassTestFiles.forEach((file) => runSass({ describe, it }, file, { importers }));
});
