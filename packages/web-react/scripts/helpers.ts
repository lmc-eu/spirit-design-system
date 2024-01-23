// eslint-disable-next-line import/no-extraneous-dependencies
import { glob } from 'glob';
import * as path from 'path';
import * as recast from 'recast';
import * as parser from 'recast/parsers/babel';

export const distDir = path.resolve(__dirname, '..', 'dist');

export function eachFile(dir: string, callback: (absPath: string, relPath: string) => unknown) {
  const promises: Promise<unknown>[] = [];

  return new Promise<void>((resolve, reject) => {
    // @ts-expect-error -- has no properties in common with type 'GlobOptions'
    glob(`${dir}/**/*.js`, (error: Error | null, files: string[]) => {
      if (error) return reject(error);

      files.sort().forEach((file: string) => {
        const relPath = path.relative(dir, file);

        // Outside the distDir, somehow.
        if (relPath.startsWith('../')) return;

        // Avoid re-transforming CommonJS bundle files.
        if (relPath.endsWith('.cjs.js')) return;
        if (relPath.endsWith('.cjs')) return;

        // Avoid re-transforming CommonJS bundle files.
        if (relPath.endsWith('.min.js')) return;

        // Avoid re-transforming UMD bundle files.
        if (relPath.endsWith('.umd.js')) return;

        // Avoid re-transforming stories files.
        if (relPath.endsWith('.stories.js')) return;

        // This file is not meant to be imported or processed.
        if (relPath.endsWith('invariantErrorCodes.js')) return;

        promises.push(
          // eslint-disable-next-line no-shadow
          new Promise((resolve) => {
            resolve(callback(file, relPath));
          }),
        );
      });

      resolve();
    });
  }).then(() => Promise.all(promises));
}

export function reparse(source: string) {
  return recast.parse(source, { parser });
}

export function reprint(ast: ReturnType<typeof reparse>) {
  return recast.print(ast).code;
}
