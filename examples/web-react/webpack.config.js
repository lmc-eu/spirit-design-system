const Path = require('path');

module.exports = () => ({
  entry: {
    demo: [Path.join(__dirname, 'src/demo.jsx')],
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: [Path.join(__dirname, 'src')],
        test: /\.(js|jsx)$/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: Path.join(__dirname, 'build'),
    publicPath: '/build/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
});
