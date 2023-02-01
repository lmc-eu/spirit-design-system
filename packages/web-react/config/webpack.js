const path = require('path');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const libName = 'web-react';

const commonConfig = require('./webpack.common');

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
    plugins: [
      new BundleAnalyzerPlugin({
        generateStatsFile: true,
        analyzerMode: 'disabled',
        statsFilename: 'stats.json',
      }),
    ],
  });
