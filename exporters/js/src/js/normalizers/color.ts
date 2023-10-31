export function normalizeColor(color: string): string {
  const colorParts = color.match(/.{1,2}/g);
  let shortHex = true;
  colorParts &&
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
