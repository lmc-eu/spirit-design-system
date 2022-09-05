import { normalizeColor } from '../normalizers/color';

/**
 * @param {object} color
 * @returns {string}
 */
export function formatColor(color) {
  if (color.a < 255) {
    return `#${color.hex}`;
  }

  return `#${normalizeColor(color.hex.substring(0, 6))}`;
}
