// The Spirit Web React source that is published to npm is located in the
// "dist" directory. This utility script is called when building Spirit Web React,
// to make sure the "dist" directory is prepared for publishing.
//
// This script will:
//
// - Copy the current root package.json into "dist" after adjusting it for
//   publishing (removing scripts, engines, legacy fields, etc.).
// - Copy the supporting files from the root into "dist" (e.g. `README.MD`,
//   `LICENSE`, etc.).

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');
const generateExports = require('./generateExports');

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

// Remove legacy fields - we're using exports field instead
delete packageJson.main;
delete packageJson.module;
delete packageJson.types;

// Generate and apply dist exports (replacing source exports from root package.json)
packageJson.exports = generateExports('dist');

// Copy supporting files into "dist"
const srcDir = `${__dirname}/..`;
const destDir = `${srcDir}/dist`;
fs.copyFileSync(`${srcDir}/README.md`, `${destDir}/README.md`);

// Write the modified package.json to dist
fs.writeFileSync(
  path.join(destDir, 'package.json'),
  JSON.stringify(packageJson, null, 2) + '\n',
);
