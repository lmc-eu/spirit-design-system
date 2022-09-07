import { cleanName } from '../normalizers/names';
import { singular } from '../normalizers/singular';
import { printTypes } from '../printers/types';
import { printUnit } from '../printers/unit';
import { formatColor } from '../formatters/color';
import { normalizeGradientAngle } from '../normalizers/gradients';

/**
 * @param {Array} allTokens
 * @param {object} groups
 * @param {boolean} sortByNum
 * @param {boolean} sortByValue
 * @param {string} breakpointsString
 * @returns {string}
 */
export function generateSimple(allTokens, groups = {}, sortByNum = false, sortByValue = false, breakpointsString = '') {
  let tokens = allTokens.sort((a, b) => {
    if (sortByNum) {
      const aNumMatch = a.name.match(/\d+$/);
      const bNumMatch = b.name.match(/\d+$/);

      if (aNumMatch && bNumMatch) {
        return aNumMatch[0] - bNumMatch[0];
      }
    }

    if (sortByValue) {
      return +a.value.text - +b.value.text;
    }
    const aCompare = cleanName(a.origin ? a.origin.name : a.name);
    const bCompare = cleanName(b.origin ? b.origin.name : b.name);

    return aCompare.localeCompare(bCompare);
  });

  if (breakpointsString.length > 0) {
    tokens = allTokens.sort((a, b) => {
      const breakpoints = breakpointsString.trim().split(',');
      let aBreakpoint = '';
      let bBreakpoint = '';
      breakpoints.some((substring) => {
        if ((a.origin ? a.origin.name : a.name).includes(substring)) {
          aBreakpoint = substring;
        }
        if ((b.origin ? b.origin.name : b.name).includes(substring)) {
          bBreakpoint = substring;
        }

        return false;
      });

      if (!!sortByValue && !aBreakpoint) {
        return -1;
      }

      return breakpoints.indexOf(aBreakpoint) - breakpoints.indexOf(bBreakpoint);
    });
  }

  const vars = [];
  const types = {};
  const names = [];
  tokens.forEach((token) => {
    // Get correct name of token
    let name = cleanName(token.name);

    if (token.origin && token.tokenType !== 'Gradient') {
      name = cleanName(token.origin.name);
    }

    let groupToken = false;

    if (names.indexOf(name) > -1) {
      groupToken = true;
    } else {
      names.push(name);
    }

    // Set token types
    let groupName = '';
    if (!groupToken && groups.length > 0) {
      groups.forEach((group) => {
        if (Object.values(group.tokenIds).indexOf(token.id) > -1 && group.isRoot === false) {
          groupName = singular(cleanName(group.name));
        }
      });
    }

    const split = name.split('-');
    const typeName = groupName === '' ? split[0] : groupName;
    const tokenNameWithoutType =
      groupName === '' ? name.replace(`${split[0]}-`, '') : name.replace(`${groupName}-`, '');
    if (!groupToken && split[0] !== name) {
      if (types[typeName] && types[typeName].length > 0) {
        types[typeName].push(tokenNameWithoutType);
      } else {
        types[typeName] = [tokenNameWithoutType];
      }
    }

    // Set value
    let value = '';
    if (token.tokenType === 'Color') {
      value = formatColor(token.value);
    } else if (token.tokenType === 'Radius') {
      value = printUnit(token.value.radius.measure, token.value.radius.unit);
    } else if (token.tokenType === 'GenericToken') {
      value = printUnit(token.value.text, 'Pixels');
    } else if (token.tokenType === 'Shadow') {
      value = `${printUnit(token.value.x.measure, token.value.x.unit)} ${printUnit(
        token.value.y.measure,
        token.value.y.unit,
      )} ${printUnit(token.value.radius.measure, token.value.radius.unit)} ${printUnit(
        token.value.spread.measure,
        token.value.spread.unit,
      )} ${formatColor(token.value.color)}`;
    } else if (token.tokenType === 'Gradient') {
      let gradientType = 'linear-gradient';
      let gradientDirection = `${Math.round(normalizeGradientAngle(token.value.from, token.value.to) * 100) / 100}deg`;
      if (token.value.type === 'Radial') {
        gradientType = 'radial-gradient';
        gradientDirection = 'circle at center';
      }
      value = `${gradientType}(${gradientDirection}, ${token.value.stops
        .map((stop) => `${formatColor(stop.color)} ${(Math.round(stop.position * 10) / 10) * 100}%`)
        .join(', ')})`;
    } else if (token.tokenType === 'Border') {
      token.properties.forEach((prop) => {
        if (prop.codeName === 'style' && prop.value.length > 0) {
          value = prop.value;
        } else {
          value = printUnit(token.value.width.measure, token.value.width.unit);
        }
      });
    } else {
      value = printUnit(token.value.measure, token.value.unit);
    }

    if (groupToken) {
      const groupOriginal = vars.filter((item) => item.startsWith(`$${name}: `))[0];
      const index = vars.indexOf(groupOriginal);
      if (index > -1) {
        vars[index] = vars[index].replace(/: (.*) !default;/g, `: ${value}, $1 !default;`);
      }
    } else {
      vars.push(`$${name}: ${value} !default;`);
    }
  });

  const typesPrint =
    tokens.length === 0 || tokens[0].tokenType === 'Border' ? '' : printTypes(types, tokens[0].tokenType === 'Color');

  return `${vars.join('\n')}\n${typesPrint}`;
}
