// Do not want to deal with exact shape of Token
// @TODO: https://github.com/lmc-eu/spirit-design-system/issues/470
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { kebabCaseToCamelCase, slugifyName } from '../normalizers/names';
import { printUnit } from '../printers/unit';
import { localeSort } from '../sorters/localeSort';
import { Token } from '..';

const ebonyFontWeights = {
  400: 300,
  600: 400,
};

export function generateTypography(
  allTokens: Array<Token>,
  defaultFontSize: string,
  fontFamilyFallback: string,
  breakpointsString = '',
) {
  const tokens = allTokens.sort(localeSort);

  const breakpoints = breakpointsString.trim().split(',');
  const styles = {};
  tokens.forEach((token) => {
    const name = slugifyName(token.origin?.name || token.name);
    let nameWithoutBreakpoint = name;
    let breakpoint = breakpoints[0];
    breakpoints.forEach((bp) => {
      if (nameWithoutBreakpoint.includes(bp)) {
        breakpoint = bp;
        nameWithoutBreakpoint = nameWithoutBreakpoint.replace(`-${bp}`, '');
      }
    });

    const fontSize = printUnit(Math.round((token.value.fontSize.measure / defaultFontSize) * 1000) / 1000, 'rem');
    let fontStyle = 'normal';
    let fontWeight = +token.value.font.subfamily;

    // Font Ebony has a different font weight mapping, so we remap these values directly
    if (token.value.font.family === 'Ebony') {
      fontWeight = ebonyFontWeights[fontWeight];
    }

    // TODO: This is a hack to get around the fact that I don't know how to check if font is italic in JS
    if (name.includes('italic')) {
      fontStyle = 'italic';
    }

    const lineHeight = token.value.lineHeight && Math.round((token.value.lineHeight.measure / 100) * 1000) / 1000;
    const letterSpacing = printUnit(token.value.letterSpacing.measure, token.value.letterSpacing.unit);
    const textDecoration = token.value.textDecoration.toLowerCase();
    const paragraphIndent = printUnit(token.value.paragraphIndent.measure, token.value.paragraphIndent.unit);
    const textTransform = token.value.textCase === 'Original' ? 'none' : token.value.textCase.toLowerCase();
    const tokenVals = {
      fontFamily: `'${token.value.font.family}'${fontFamilyFallback}`,
      fontSize,
      fontStyle,
      fontWeight,
      lineHeight,
      letterSpacing,
      textDecoration,
      paragraphIndent,
      textTransform,
    };

    if (typeof styles[nameWithoutBreakpoint] !== 'undefined') {
      styles[nameWithoutBreakpoint][breakpoint] = tokenVals;
    } else {
      styles[nameWithoutBreakpoint] = {
        [breakpoint]: tokenVals,
      };
    }
  });

  const vars = [];
  const list = [];
  Object.entries(styles).forEach(([styleName, styleBreakpoints]) => {
    if (styleName.includes('-link')) {
      return;
    }
    list.push(`${kebabCaseToCamelCase(styleName)}: ${kebabCaseToCamelCase(styleName)},`);
    const breakpointValues = [];
    breakpoints.forEach((breakpoint) => {
      const breakpointVal = styleBreakpoints[breakpoint];
      if (typeof breakpointVal !== 'undefined') {
        const printLineHeight = breakpointVal.lineHeight ? `\n        lineHeight: ${breakpointVal.lineHeight},` : '';
        const printLetterSpacing =
          breakpointVal.letterSpacing !== '0' ? `\n        letterSpacing: ${breakpointVal.letterSpacing},` : '';
        const printTextDecoration =
          breakpointVal.textDecoration !== 'none' ? `\n        textDecoration: ${breakpointVal.textDecoration},` : '';
        const printParagraphIndent =
          breakpointVal.paragraphIndent !== '0' ? `\n        textIndent: ${breakpointVal.paragraphIndent},` : '';
        const printTextTransform =
          breakpointVal.textTransform !== 'none' ? `\n        textTransform: ${breakpointVal.textTransform},` : '';
        breakpointValues.push(`${breakpoint}: {
        fontFamily: "${breakpointVal.fontFamily}",
        fontSize: '${breakpointVal.fontSize}',
        fontStyle: '${breakpointVal.fontStyle}',
        fontWeight: ${breakpointVal.fontWeight},${printLineHeight}${printLetterSpacing}${printTextDecoration}${printParagraphIndent}${printTextTransform}
    },`);
      }
    });
    vars.push(`export const ${kebabCaseToCamelCase(styleName)} = {
    ${breakpointValues.join('\n    ')}
};\n`);
  });
  const listPrint = `export const styles = {
    ${list.join('\n    ')}
};`;

  return `${vars.join('\n')}\n${listPrint}\n`;
}
