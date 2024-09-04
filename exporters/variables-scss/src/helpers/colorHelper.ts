const SHORT_HEX_WITHOUT_ALPHA_LENGTH = 3;
const SHORT_HEX_WITH_ALPHA_LENGTH = 4;
const LONG_HEX_WITH_ALPHA_LENGTH = 8;

export const canHexBeShortened = (hex: string) => {
  return hex.length % 2 === 0 && [...Array(hex.length / 2)].every((_, index) => hex[2 * index] === hex[2 * index + 1]);
};

export const shortenHex = (hex: string): string => {
  return hex
    .split('')
    .map((char, index) => (index % 2 === 0 ? char : ''))
    .join('');
};

export const removeAlphaChannel = (hex: string): string => {
  if (hex.length === LONG_HEX_WITH_ALPHA_LENGTH && hex.endsWith('ff')) {
    return hex.slice(0, -2);
  }

  if (hex.length === SHORT_HEX_WITH_ALPHA_LENGTH && hex.endsWith('f')) {
    return hex.slice(0, -1);
  }

  return hex;
};

export const normalizeColor = (hexCode: string): string => {
  const isShortHex = [SHORT_HEX_WITHOUT_ALPHA_LENGTH, SHORT_HEX_WITH_ALPHA_LENGTH].includes(hexCode.length);

  let processedHex;

  if (isShortHex) {
    processedHex = hexCode;
  } else if (canHexBeShortened(hexCode)) {
    processedHex = shortenHex(hexCode);
  } else {
    processedHex = hexCode;
  }

  processedHex = removeAlphaChannel(processedHex);

  return `#${processedHex}`;
};
