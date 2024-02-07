const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
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
      'html-react-parser': {
        commonjs: 'html-react-parser',
        commonjs2: 'html-react-parser',
        amd: 'html-react-parser',
        root: 'html-react-parser',
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
          path.resolve(__dirname, '../src'), // library
          path.resolve(__dirname, '../../common'), // common
        ],
        options: {
          configFile: require.resolve('./tsconfig.webpack.json'),
        },
      },
    ],
  },
};
