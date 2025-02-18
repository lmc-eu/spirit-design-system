const fs = require('fs');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const jsdom = require('jsdom');
const { filterSvgFiles } = require('./shared');

const svgSrcDir = path.resolve(__dirname, '../dist/svg');
const distFile = path.resolve(__dirname, '../dist/icons.js');

const buildContants = (srcDir, file) => {
  fs.readdir(srcDir, (err, files) => {
    const svgs = filterSvgFiles(files);

    if (svgs.length > 0) {
      const icons = {};
      let distContent = 'const icons = ';

      svgs.forEach((svg) => {
        const iconName = svg.replace('.svg', '');
        const svgPath = path.join(srcDir, svg);
        const svgFile = fs.readFileSync(svgPath, 'utf8');
        const dom = new jsdom.JSDOM(svgFile);
        const svgContent = dom.window.document.querySelector('svg').innerHTML.replaceAll('\n', '');

        icons[iconName] = svgContent;
      });

      distContent += JSON.stringify(icons, null, 2);
      distContent += ';';
      // eslint-disable-next-line quotes -- we need to use special chars in this string
      distContent += `\n\nexport default icons;`;

      fs.writeFileSync(file, distContent);
    }
  });
};

buildContants(svgSrcDir, distFile);
