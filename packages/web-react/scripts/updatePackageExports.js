// Script to update the root package.json with source exports

const fs = require('fs');
const path = require('path');
const generateExports = require('./generateExports');

const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Generate source exports
const sourceExports = generateExports('source');

// Update the exports field
packageJson.exports = sourceExports;

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log('✅ Updated package.json with source exports');
console.log(`   Total export paths: ${Object.keys(sourceExports).length}`);
