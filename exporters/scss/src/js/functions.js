/**
 *
 * @param {string} name
 * @returns {string}
 */
function cleanName(name) {
  return name.replace(/\s/g, '-').replace(/\//g, '-').replace(/\d+-/g, '').replace(/--+/g, '-').toLowerCase();
}

/**
 * @param {string} name
 * @returns {string}
 */
function plural(name) {
  if (name === 'radius') {
    return 'radii';
  }
  if (name.slice(-1) === 's') {
    return name;
  }

  return `${name}s`;
}

/**
 * @param {string} name
 * @returns {string}
 */
function singular(name) {
  if (name.slice(-1) === 's') {
    return name.replace(/.$/, '');
  }

  return name;
}

/**
 * @param {string} color
 * @returns {string}
 */
function formatColor(color) {
  const colorParts = color.match(/.{1,2}/g);
  let shortHex = true;
  colorParts.forEach((part) => {
    if (shortHex) {
      shortHex = /^(.)\1+$/.test(part);
    }
  });

  if (shortHex) {
    return `${color.substring(0, 1)}${color.substring(2, 3)}${color.substring(4, 5)}`;
  }

  return color;
}

/**
 * @param {object} color
 * @returns {string}
 */
function getColor(color) {
  if (color.a < 255) {
    return `#${color.hex}`;
  }

  return `#${formatColor(color.hex.substring(0, 6))}`;
}

/**
 *
 * @param {object} from
 * @param {object} to
 * @returns {number}
 */
function getGradientAngle(from, to) {
  const deltaY = (to.y - from.y);
  const deltaX = (to.x - from.x);
  const radians = Math.atan2(deltaY, deltaX);
  let result = radians * 180 / Math.PI;
  result += 90;

  return  ((result < 0) ? (360 + result) : result) % 360;
}

/**
 * @param {string} name
 * @returns {number|string}
 */
function getWeight(name) {
  switch (name.toLowerCase().replace(/\W/g, '')) {
    case 'thin':
      return 100;
    case 'extralight':
      return 200;
    case 'light':
      return 300;
    case 'normal':
      return 400;
    case 'regular':
      return 400;
    case 'medium':
      return 500;
    case 'semibold':
      return 600;
    case 'bold':
      return 700;
    case 'extrabold':
      return 800;
    case 'black':
      return 900;
    case 'extrablack':
      return 950;
    default:
      return name;
  }
}

/**
 * @param {number} value
 * @param {string} unit
 * @returns {string}
 */
function printUnit(value, unit) {
  let result = value;
  if (value > 0) {
    if (unit === 'Pixels') {
      result += 'px';
    }
    if (unit === 'rem') {
      result += 'rem';
    }
  }


return result;
}

/**
 * @param {object} types
 * @param {string} colors
 * @returns {string}
 */
function printTypes(types, colors) {
  let result = '';
  Object.entries(types).forEach(([key, value]) => {
    result = `${result}\n$${colors ? `${key}-colors` : plural(key)}: (
${value.map((val) => `    ${val}: $${key}-${val},`).join('\n')}
) !default;\n`;
  });


return result;
}

/**
 * @param {Array} allTokens
 * @param {object} groups
 * @param {boolean} sortByNum
 * @param {boolean} sortByValue
 * @param {string} breakpointsString
 * @returns {string}
 */
function generateSimple(allTokens, groups = {}, sortByNum = false, sortByValue = false, breakpointsString = '') {
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
      breakpoints.some((substring)=> {
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
    let name = cleanName(token.name)
    if (token.origin && token.tokenType !== 'Gradient') {
      name = cleanName(token.origin.name)
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
    const tokenNameWithoutType = groupName === '' ? name.replace(`${split[0]}-`,'') : name.replace(`${groupName}-`,'');
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
      value = getColor(token.value);
    } else if (token.tokenType === 'Radius') {
      value = printUnit(token.value.radius.measure, token.value.radius.unit);
    } else if (token.tokenType === 'GenericToken') {
      value = printUnit(token.value.text, 'Pixels');
    } else if (token.tokenType === 'Shadow') {
      value = `${printUnit(token.value.x.measure, token.value.x.unit)} ${printUnit(token.value.y.measure, token.value.y.unit)} ${printUnit(token.value.radius.measure, token.value.radius.unit)} ${printUnit(token.value.spread.measure, token.value.spread.unit)} ${getColor(token.value.color)}`;
    } else if(token.tokenType === 'Gradient') {
      let gradientType = 'linear-gradient';
      let gradientDirection = `${Math.round(getGradientAngle(token.value.from, token.value.to) * 100) / 100}deg`;
      if (token.value.type === 'Radial') {
        gradientType = 'radial-gradient';
        gradientDirection = 'circle at center';
      }
      value = `${gradientType}(${gradientDirection}, ${token.value.stops.map((stop) => `${getColor(stop.color)} ${(Math.round(stop.position * 10) / 10) * 100}%`).join(', ')})`;
    } else if (token.tokenType === 'Border') {
      token.properties.forEach((prop) => {
        if (prop.codeName === 'style' && prop.value.length > 0) {
          value = prop.value;
        } else {
          value = printUnit(token.value.width.measure, token.value.width.unit);
        }
      })
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

  const typesPrint = tokens.length === 0 || tokens[0].tokenType === 'Border' ? '' : printTypes(types, tokens[0].tokenType === 'Color');

  return `${vars.join('\n')}\n${typesPrint}`;
}

/**
 * @param {Array} allTokens
 * @param {string} defaultFontSize
 * @param {string} fontFamilyFallback
 * @param {string} breakpointsString
 * @returns {string}
 */
// eslint-disable-next-line default-param-last
function generateTypography(allTokens = [], defaultFontSize, fontFamilyFallback, breakpointsString = '') {
  const tokens = allTokens.sort((a, b) => {
    const aCompare = cleanName(a.origin ? a.origin.name : a.name);
    const bCompare = cleanName(b.origin ? b.origin.name : b.name);

    return aCompare.localeCompare(bCompare);
  });

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
    const textTransform = token.value.textCase === 'Original' ? 'none' : token.value.textCase.toLowerCase()
    const tokenVals = {
      fontFamily: `'${token.value.font.family}'${fontFamilyFallback}`,
      fontSize,
      fontStyle,
      fontWeight: getWeight(fontWeight),
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
    list.push(`${styleName}: $${styleName},`)
    const breakpointValues = [];
    breakpoints.forEach((breakpoint) => {
      const breakpointVal = styleBreakpoints[breakpoint];
      if(typeof breakpointVal !== 'undefined') {
        const printLetterSpacing = breakpointVal.letterSpacing !== 0 ? `\n        letter-spacing: ${breakpointVal.letterSpacing},` : '';
        const printTextDecoration = breakpointVal.textDecoration !== 'none' ? `\n        text-decoration: ${breakpointVal.textDecoration},` : '';
        const printParagraphIndent = breakpointVal.paragraphIndent !== 0 ? `\n        text-indent: ${breakpointVal.paragraphIndent},` : '';
        const printTextTransform = breakpointVal.textTransform !== 'none' ? `\n        text-transform: ${breakpointVal.textTransform},` : '';
        breakpointValues.push(`${breakpoint}: (
        font-family: "${breakpointVal.fontFamily}",
        font-size: ${breakpointVal.fontSize},
        font-style: ${breakpointVal.fontStyle},
        font-weight: ${breakpointVal.fontWeight},
        line-height: ${breakpointVal.lineHeight},${printLetterSpacing}${printTextDecoration}${printParagraphIndent}${printTextTransform}
    ),`);
      }
    })
    vars.push(`$${styleName}: (
    ${breakpointValues.join('\n    ')}
) !default;\n`);
  });
  const listPrint = `$styles: (
    ${list.join('\n    ')}
) !default;`


  return `${vars.join('\n')}\n${listPrint}\n`;
}

// Pulsar is global-scope object of Supernova, accesible only inside the platform
// @see: https://developers.supernova.io/building-exporters/creating-new-exporter/using-javascript
// eslint-disable-next-line no-undef
Pulsar.registerFunction("generateSimple", generateSimple);
// eslint-disable-next-line no-undef
Pulsar.registerFunction("generateTypography", generateTypography);
