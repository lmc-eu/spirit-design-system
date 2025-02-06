// eslint-disable-next-line @typescript-eslint/no-var-requires -- refactor to ESM TypeScript
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      grid: true,
    }),
  ],
};
