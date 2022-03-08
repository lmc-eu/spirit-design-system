function cleanName(name) {
  return name.replace(/\s/g, '-').replace(/\//g, '-').replace(/\d+-/g, '').replace(/--+/g, '-').toLowerCase();
}

function plural(name) {
  if (name === 'radius') {
    return 'radii';
  }
  if (name.slice(-1) === 's') {
    return name;
  }
  return `${name}s`;
}

function singular(name) {
  if (name.slice(-1) === 's') {
    return name.replace(/.$/, '');
  }
  return name;
}

function formatColor(color) {
  const colorParts = color.match(/.{1,2}/g);
  let shortHex = true;
  colorParts.map((part) => {
    if (shortHex) {
      shortHex = /^(.)\1+$/.test(part);
    }
  });

  if (shortHex) {
    return `${color.substring(0, 1)}${color.substring(2, 3)}${color.substring(4, 5)}`;
  }

  return color;
}

function getColor(color) {
  if (color.a < 255) {
    return `#${color.hex}`;
  } else {
    return `#${formatColor(color.hex.substring(0, 6))}`;
  }
}

function getGradientAngle(from, to) {
  var deltaY = (to.y - from.y);
  var deltaX = (to.x - from.x);
  var radians = Math.atan2(deltaY, deltaX); 
  var result = radians * 180 / Math.PI; 
  result = result + 90; 
  return  ((result < 0) ? (360 + result) : result) % 360;
}

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

function printUnit(value, unit) {
  let result = value;
  if (value > 0) {
    if (unit === 'Pixels') {
      result = result + 'px';
    }
    if (unit === 'rem') {
      result = result + 'rem';
    }
  }
  return result;
}

function printTypes(types, colors) {
  let result = '';
  Object.entries(types).forEach(([key, value]) => {
    result = `${result}\n$${colors ? `${key}-colors` : plural(key)}: (
${value.map((val) => `    ${val}: $${key}-${val},`).join('\n')}
) !default;\n`; 
  });
  return result;
}

Pulsar.registerFunction("generateSimple", function(allTokens, groups = {}, sortByNum = false, sortByValue = false) {
  const tokens = allTokens.sort((a, b) => {
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

  const vars = [];
  let types = {};
  const names = [];
  tokens.map((token) => {
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
      groups.map((group) => {
        if (Object.values(group.tokenIds).indexOf(token.id) > -1 && group.isRoot == false) {
          groupName = singular(cleanName(group.name));
        }
      });
    }
    const split = name.split('-');
    const typeName = groupName === '' ? split[0] : groupName;
    const tokenNameWithoutType = groupName === '' ? name.replace(`${split[0]}-`,'') : name.replace(`${groupName}-`,'');
    if (!groupToken) {
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
      token.properties.map((prop) => {
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
});

Pulsar.registerFunction("generateTypography", function(allTokens = [], defaultFontSize, fontFamilyFallback, breakpointsString = '') {
  const tokens = allTokens.sort((a, b) => {
    const aCompare = cleanName(a.origin ? a.origin.name : a.name);
    const bCompare = cleanName(b.origin ? b.origin.name : b.name);
    return aCompare.localeCompare(bCompare);
  });

  const breakpoints = breakpointsString.trim().split(',');
  const styles = {};
  tokens.map((token) => {
    let name = cleanName(token.name);
    if (token.origin) {
      name = cleanName(token.origin.name);
    }
    let nameWithoutBreakpoint = name;
    let breakpoint = breakpoints[0];
    breakpoints.map((bp) => {
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
    if (styles[nameWithoutBreakpoint] !== undefined) {
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
    list.push(`${styleName}: $${styleName},`)
    const breakpointValues = [];
    breakpoints.map((breakpoint) => {
      const breakpointVal = styleBreakpoints[breakpoint];
      if(breakpointVal !== undefined) {
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
});
