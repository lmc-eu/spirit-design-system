const fs = require('fs');
const path = require('path');
const { cssVariablePrefix } = require('@lmc-eu/spirit-design-tokens');
const { filterSvgFiles, getIconType, DUALTONE_ICON_TYPE, COLORED_ICON_TYPE } = require('./shared');

const svgSrcDir = path.resolve(__dirname, '../src/svg');
const svgDistDir = path.resolve(__dirname, '../dist/svg');

const DUALTONE_BACKGROUND_COLOR = '#F2F2F2';
const DUALTONE_BORDER_COLOR = '#202020';

const normalizeSvgColors = (fileName, svgContent) => {
  const iconType = getIconType(fileName);

  if (iconType === DUALTONE_ICON_TYPE) {
    return svgContent
      .replace(
        new RegExp(`fill="${DUALTONE_BACKGROUND_COLOR}"`, 'g'),
        `fill="var(--${cssVariablePrefix}icon-dualtone-color-background)"`,
      )
      .replace(
        new RegExp(`fill="${DUALTONE_BORDER_COLOR}"`, 'g'),
        `fill="var(--${cssVariablePrefix}icon-dualtone-color-border)"`,
      )
      .replace(
        new RegExp(`stroke="${DUALTONE_BORDER_COLOR}"`, 'g'),
        `stroke="var(--${cssVariablePrefix}icon-dualtone-color-border)"`,
      );
  }

  if (iconType === COLORED_ICON_TYPE) {
    return svgContent;
  }

  return svgContent.replace(/fill="#\w+"/g, 'fill="currentColor"');
};

const normalizeAndCopySvg = (srcDir, distDir) => {
  fs.readdir(srcDir, (err, files) => {
    const svgs = filterSvgFiles(files);

    if (svgs.length > 0) {
      let sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n';
      const spriteDistFile = path.join(distDir, 'sprite.svg');

      svgs.forEach((svg) => {
        const svgPath = path.join(srcDir, svg);
        const svgDistPath = path.join(distDir, svg);
        const svgContent = fs.readFileSync(svgPath, 'utf8');
        const svgContentNormalized = normalizeSvgColors(svg, svgContent);
        const svgSpriteContent = svgContentNormalized
          .replace(/<svg.*(viewBox="(\d+\s){3}\d+").*>/, `<symbol id="${svg.slice(0, -4)}" $1>`)
          .replace(/<\/svg>/g, '</symbol>');
        sprite += svgSpriteContent;
        fs.writeFileSync(path.join(svgDistPath), svgContentNormalized);
      });

      sprite += '</svg>';

      fs.writeFileSync(spriteDistFile, sprite);
    }
  });
};

normalizeAndCopySvg(svgSrcDir, svgDistDir);
