const COLOR_HEX_LENGTH = {
  SHORT: 'short',
  LONG: 'long',
};

type ColorHexLength = (typeof COLOR_HEX_LENGTH)[keyof typeof COLOR_HEX_LENGTH];

export function normalizeColor(color: string, colorHexLength: ColorHexLength = COLOR_HEX_LENGTH.SHORT): string {
  const colorParts = color.match(/.{1,2}/g);
  let shortHex = colorHexLength === COLOR_HEX_LENGTH.SHORT;
  colorParts &&
    colorParts.forEach((part) => {
      if (colorHexLength === COLOR_HEX_LENGTH.SHORT) {
        shortHex = /^(.)\1+$/.test(part);
      }
    });

  if (shortHex) {
    return `${color.substring(0, 1)}${color.substring(2, 3)}${color.substring(4, 5)}${color.substring(6, 7)}`;
  }

  if (colorHexLength === COLOR_HEX_LENGTH.LONG && color.length === 3) {
    // Convert short hex to long hex
    // @see: https://www.30secondsofcode.org/js/s/extend-hex/
    return color
      .split('')
      .map((x) => x + x)
      .join('');
  }

  return color;
}
