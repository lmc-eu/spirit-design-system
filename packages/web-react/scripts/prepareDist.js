// The Spirit Web React source that is published to npm is located in the
// "dist" directory. This utility script is called when building Spirit Web React,
// to make sure the "dist" directory is prepared for publishing.
//
// This script will:
//
// - Copy the current root package.json into "dist" after adjusting it for
//   publishing.
// - Copy the supporting files from the root into "dist" (e.g. `README.MD`,
//   `LICENSE`, etc.).
// - Create a new `package.json` for each sub-set bundle we support, and
//   store it in the appropriate dist sub-directory.

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');
const packageEntryPoints = require('./entryPoints');

const distRoot = `${__dirname}/../dist`;

// Enable default interpretation of .js files as ECMAScript modules.
packageJson.type = 'module';

// The root package.json is marked as private to prevent publishing
// from happening in the root of the project. This sets the package back to
// public so it can be published from the "dist" directory.
packageJson.private = false;

// Remove package.json items that we don't need to publish
delete packageJson.scripts;
delete packageJson.bundlesize;
delete packageJson.engines;

// Copy supporting files into "dist"
const srcDir = `${__dirname}/..`;
const destDir = `${srcDir}/dist`;
fs.copyFileSync(`${srcDir}/README.md`, `${destDir}/README.md`);

// Create individual bundle package.json files, storing them in their
// associated dist directory. This helps provide a way for the Spirit Web React
// components, HOC, and various links to be used by themselves, via CommonJS
// entry point files that only include the exports needed for each bundle.

packageEntryPoints.forEach(({ dirs, bundleName = dirs[dirs.length - 1], sideEffects = false }) => {
  if (!dirs.length) return;
  fs.writeFileSync(
    path.join(distRoot, ...dirs, 'package.json'),
    `${JSON.stringify(
      {
        name: path.posix.join('@lmc-eu', 'spirit-web-react', ...dirs),
        type: 'module',
        main: `${bundleName}.cjs`,
        module: 'index.js',
        types: 'index.d.ts',
        sideEffects,
      },
      null,
      2,
    )}\n`,
  );
});
