/**
 * @param {string} name
 * @returns {string}
 */
export function plural(name) {
  if (name === 'radius') {
    return 'radii';
  }
  if (name.slice(-1) === 's') {
    return name;
  }

  return `${name}s`;
}
