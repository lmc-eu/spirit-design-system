const fs = require('fs');
const path = require('path');
const { cssVariablePrefix } = require('@lmc-eu/spirit-design-tokens');
const { filterSvgFiles } = require('./shared');

const svgSrcDir = path.resolve(__dirname, '../src/svg');
const svgDistDir = path.resolve(__dirname, '../dist/svg');

const DUALTONE_BACKGROUND_COLOR = '#F2F2F2';
const DUALTONE_BORDER_COLOR = '#202020';

const normalizeSvgColors = (fileName, svgContent) => {
  if (fileName.endsWith('-dualtone.svg')) {
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

  if (fileName.endsWith('-colored.svg')) {
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
