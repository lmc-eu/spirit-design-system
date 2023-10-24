const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const libName = 'web-react.browser';

module.exports = (env, argv) =>
  merge(commonConfig, {
    output: {
      // Puts the output at the root of the dist folder
      path: path.join(__dirname, '../dist/bundles'),
      filename: `${libName}${argv.mode === 'production' ? '.umd.min.js' : '.umd.js'}`,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      library: 'webReact',
    },
  });
