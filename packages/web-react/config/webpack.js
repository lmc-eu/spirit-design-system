const path = require('path');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common');

const libName = 'web-react';

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
        statsFilename: 'browser-stats.json',
        generateStatsFile: false,
        analyzerMode: 'disabled',
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
  });
