const path = require('path');

const filterSvgFiles = (fileNames) =>
  fileNames.filter((fileName) => path.extname(fileName) === '.svg' && fileName !== 'sprite.svg');

module.exports = {
  filterSvgFiles,
};
