// Do not want to deal with exact shape of Token
// @TODO: https://github.com/lmc-eu/spirit-design-system/issues/470
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { cleanName } from '../normalizers/names';
import { printUnit } from '../printers/unit';
import { normalizeWeight } from '../normalizers/weight';
import { localeSort } from '../sorters/localeSort';
import { Token } from '..';

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
    let name = cleanName(token.name);
    if (token.origin) {
      name = cleanName(token.origin.name);
    }
    let nameWithoutBreakpoint = name;
    let breakpoint = breakpoints[0];
    breakpoints.forEach((bp) => {
      if (nameWithoutBreakpoint.includes(bp)) {
        breakpoint = bp;
        nameWithoutBreakpoint = nameWithoutBreakpoint.replace(`-${bp}`, '');
      }
    });

    const subfamily = token.value.font.subfamily.toLowerCase();
    const fontSize = printUnit(Math.round((token.value.fontSize.measure / defaultFontSize) * 1000) / 1000, 'rem');
    let fontStyle = 'normal';
    let fontWeight = 'normal';
    if (subfamily === 'italic') {
      fontStyle = 'italic';
    } else {
      fontWeight = subfamily;
    }
    const lineHeight = Math.round((token.value.lineHeight.measure / 100) * 1000) / 1000;
    const letterSpacing = printUnit(token.value.letterSpacing.measure, token.value.letterSpacing.unit);
    const textDecoration = token.value.textDecoration.toLowerCase();
    const paragraphIndent = printUnit(token.value.paragraphIndent.measure, token.value.paragraphIndent.unit);
    const textTransform = token.value.textCase === 'Original' ? 'none' : token.value.textCase.toLowerCase();
    const tokenVals = {
      fontFamily: `'${token.value.font.family}'${fontFamilyFallback}`,
      fontSize,
      fontStyle,
      fontWeight: normalizeWeight(fontWeight),
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
    if (styleName.includes('-link-')) {
      return;
    }
    list.push(`${styleName}: $${styleName},`);
    const breakpointValues = [];
    breakpoints.forEach((breakpoint) => {
      const breakpointVal = styleBreakpoints[breakpoint];
      if (typeof breakpointVal !== 'undefined') {
        const printLetterSpacing =
          breakpointVal.letterSpacing !== 0 ? `\n        letter-spacing: ${breakpointVal.letterSpacing},` : '';
        const printTextDecoration =
          breakpointVal.textDecoration !== 'none' ? `\n        text-decoration: ${breakpointVal.textDecoration},` : '';
        const printParagraphIndent =
          breakpointVal.paragraphIndent !== 0 ? `\n        text-indent: ${breakpointVal.paragraphIndent},` : '';
        const printTextTransform =
          breakpointVal.textTransform !== 'none' ? `\n        text-transform: ${breakpointVal.textTransform},` : '';
        breakpointValues.push(`${breakpoint}: (
        font-family: "${breakpointVal.fontFamily}",
        font-size: ${breakpointVal.fontSize},
        font-style: ${breakpointVal.fontStyle},
        font-weight: ${breakpointVal.fontWeight},
        line-height: ${breakpointVal.lineHeight},${printLetterSpacing}${printTextDecoration}${printParagraphIndent}${printTextTransform}
    ),`);
      }
    });
    vars.push(`$${styleName}: (
    ${breakpointValues.join('\n    ')}
) !default;\n`);
  });
  const listPrint = `$styles: (
    ${list.join('\n    ')}
) !default;`;

  return `${vars.join('\n')}\n${listPrint}\n`;
}
