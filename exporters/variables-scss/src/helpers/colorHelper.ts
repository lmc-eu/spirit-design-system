const SHORT_HEX_WITHOUT_ALPHA_LENGTH = 3;
const SHORT_HEX_WITH_ALPHA_LENGTH = 4;
const LONG_HEX_WITH_ALPHA_LENGTH = 8;

export const canHexBeShortened = (hex: string) => {
  return hex.length % 2 === 0 && hex.split('').every((ch, i, arr) => (i % 2 === 0 ? ch === arr[i + 1] : true));
};

export const shortHex = (hex: string): string => {
  return hex
    .split('')
    .map((char, index) => (index % 2 === 0 ? char : ''))
    .join('');
};

export const normalizeColor = (hexCode: string): string => {
  const isShortHex = [SHORT_HEX_WITHOUT_ALPHA_LENGTH, SHORT_HEX_WITH_ALPHA_LENGTH].includes(hexCode.length);

  let processedHex;

  if (isShortHex) {
    processedHex = hexCode;
  } else if (canHexBeShortened(hexCode)) {
    processedHex = shortHex(hexCode);
  } else {
    processedHex = hexCode;
  }

  // Remove alpha channel if it's 255 aka ff
  if (processedHex.length === LONG_HEX_WITH_ALPHA_LENGTH && processedHex.endsWith('ff')) {
    return `#${processedHex.slice(0, -2)}`;
  }

  // Remove alpha channel if it's 255 aka f (in short form)
  if (processedHex.length === SHORT_HEX_WITH_ALPHA_LENGTH && processedHex.endsWith('f')) {
    return `#${processedHex.slice(0, -1)}`;
  }

  return `#${processedHex}`;
};
