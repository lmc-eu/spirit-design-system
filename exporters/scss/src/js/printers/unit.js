/**
 * @param {number} value
 * @param {string} unit
 * @returns {string}
 */
export function printUnit(value, unit) {
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
