const path = require('path');

const ICON_TYPE_DUALTONE = 'dualtone';
const ICON_TYPE_COLORED = 'colored';

const filterSvgFiles = (fileNames) =>
  fileNames.filter((fileName) => path.extname(fileName) === '.svg' && fileName !== 'sprite.svg');

const getIconType = (fileName) => {
  if (fileName.endsWith('-dualtone.svg')) {
    return ICON_TYPE_DUALTONE;
  }

  if (fileName.endsWith('-colored.svg')) {
    return ICON_TYPE_COLORED;
  }

  return 'default';
};

module.exports = {
  filterSvgFiles,
  getIconType,
  ICON_TYPE_DUALTONE,
  ICON_TYPE_COLORED,
};
