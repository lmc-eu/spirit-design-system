const fs = require('fs');
const path = require('path');

const svgSrcDir = path.resolve(__dirname, `../src/svg`);
const svgDistDir = path.resolve(__dirname, `../dist/svg`);

const normalizeAndCopySvg = (srcDir, distDir) => {
  fs.readdir(srcDir, (err, files) => {
    const svgs = files.filter((el) => path.extname(el) === '.svg');
    if (svgs.length > 0) {
      let sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n';
      const spriteDistFile = path.join(distDir, 'sprite.svg');

      svgs.forEach((svg) => {
        const svgPath = path.join(srcDir, svg);
        const svgDistPath = path.join(distDir, svg);
        const svgContent = fs.readFileSync(svgPath, 'utf8');
        const svgContentFixed = svgContent.replace(/fill="#\w+"/g, 'fill="currentColor"');
        const svgSpriteContent = svgContentFixed
          .replace(/<svg.*(viewBox="(\d+\s){3}\d+").*>/, `<symbol id="${svg.slice(0, -4)}" $1>`)
          .replace(/<\/svg>/g, '</symbol>');
        sprite += svgSpriteContent;
        fs.writeFileSync(path.join(svgDistPath), svgContentFixed);
      });

      sprite += '</svg>';

      fs.writeFileSync(spriteDistFile, sprite);
    }
  });
};

normalizeAndCopySvg(svgSrcDir, svgDistDir);
