const path = require('path');

const DUALTONE_ICON_TYPE = 'dualtone';
const COLORED_ICON_TYPE = 'colored';

const filterSvgFiles = (fileNames) =>
  fileNames.filter((fileName) => path.extname(fileName) === '.svg' && fileName !== 'sprite.svg');

const getIconType = (fileName) => {
  if (fileName.endsWith('-dualtone.svg')) {
    return DUALTONE_ICON_TYPE;
  }

  if (fileName.endsWith('-colored.svg')) {
    return COLORED_ICON_TYPE;
  }

  return 'default';
};

module.exports = {
  filterSvgFiles,
  getIconType,
  DUALTONE_ICON_TYPE,
  COLORED_ICON_TYPE,
};
