/**
 * @param {string} name
 * @returns {string}
 */
export function singular(name) {
  if (name.slice(-1) === 's') {
    return name.replace(/.$/, '');
  }

  return name;
}
