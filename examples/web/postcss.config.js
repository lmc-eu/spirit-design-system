// ESLint cannot resolve this dependency because example has its own package.json.
// eslint-disable-next-line import/no-unresolved
const postcssPrefixer = require('postcss-prefixer');

module.exports = {
  plugins: [
    postcssPrefixer({
      prefix: 'jobs-',
    }),
  ],
};
