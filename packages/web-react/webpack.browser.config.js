const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const libName = 'web-react.browser';

module.exports = (env, argv) => ({
  entry: {
    index: './src/index.tsx',
  },
  externals: [], // exclude parse5 from browser bundle
  resolve: { extensions: ['.ts', '.js', '.tsx'] },
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname, 'dist/_bundles'),
    filename:
      libName + (argv.mode === 'production' ? '.umd.min.js' : '.umd.js'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'webReact',
  },
  externals: [
    {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'react',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'react-dom',
      },
    },
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src'), // library
        ],
        options: {
          configFile: require.resolve('./tsconfig.webpack.json'),
        },
      },
    ],
  },
  performance: { hints: false }, // this disables warning about large output file (in our case its ~300Kb which is fine)
  plugins: [
    new BundleAnalyzerPlugin({
      statsFilename: 'browser-stats.json',
      generateStatsFile: true,
      analyzerMode: 'disabled',
    }),
  ],
});
