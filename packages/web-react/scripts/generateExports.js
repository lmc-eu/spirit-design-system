// Script to generate the comprehensive exports field for package.json
// Based on the entry points defined in entryPoints.js

const entryPoints = require('./entryPoints');

/**
 * Generate exports field structure for package.json
 * @param {string} mode - 'source' for TypeScript source files, 'dist' for built files
 * @returns {Object} exports configuration
 */
function generateExports(mode = 'dist') {
  const exports = {};

  if (mode === 'source') {
    // For source mode: export TypeScript files from src/
    exports['.'] = {
      types: './src/index.ts',
      default: './src/index.ts',
    };
    exports['./package.json'] = './package.json';

    // Generate exports for all entry points
    entryPoints.forEach(({ dirs }) => {
      if (!dirs.length) return; // Skip root entry point as it's already defined

      const path = dirs.join('/');
      const exportPath = `./${path}`;

      exports[exportPath] = {
        types: `./src/${path}/index.ts`,
        default: `./src/${path}/index.ts`,
      };
    });
  } else {
    // For dist mode: export built JavaScript files
    exports['.'] = {
      types: './index.d.ts',
      import: './index.js',
      require: './index.cjs',
    };
    exports['./package.json'] = './package.json';

    // Generate exports for all entry points
    entryPoints.forEach(({ dirs, bundleName = dirs[dirs.length - 1] }) => {
      if (!dirs.length) return; // Skip root entry point as it's already defined

      const path = dirs.join('/');
      const exportPath = `./${path}`;

      exports[exportPath] = {
        types: `./${path}/index.d.ts`,
        import: `./${path}/index.js`,
        require: `./${path}/${bundleName}.cjs`,
      };
    });
  }

  return exports;
}

// When run directly, output the exports (mode can be passed as CLI argument)
if (require.main === module) {
  const mode = process.argv[2] || 'dist';
  const exportsField = generateExports(mode);
  console.log(`Generated ${mode} exports field:`);
  console.log(JSON.stringify(exportsField, null, 2));
}

// Export for use in other scripts
module.exports = generateExports;
