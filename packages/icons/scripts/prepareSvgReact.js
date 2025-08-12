import fs from 'fs';
import path from 'path';
import { filterSvgFiles } from './shared';

const svgDistDir = path.resolve(__dirname, '../dist/svg');
const tmpDistDir = path.resolve(__dirname, '../dist/.tmp-svg');

export const toPascalCase = (string) =>
  string
    .replace('.svg', '')
    .replace(/\w+/g, (word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .replaceAll('-', '');

export const prepareSvgForReactComponent = (srcDir, distDir) => {
  fs.readdir(srcDir, (err, files) => {
    const svgs = filterSvgFiles(files);
    if (svgs.length > 0) {
      svgs.forEach((svg) => {
        const svgPath = path.join(srcDir, svg);
        const svgDistPath = path.join(distDir, `${toPascalCase(svg)}Icon.svg`);

        fs.copyFile(svgPath, svgDistPath, () => {});
      });
    }
  });
};

prepareSvgForReactComponent(svgDistDir, tmpDistDir);
