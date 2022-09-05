/**
 * @param {string} name
 * @returns {string}
 */
export function cleanName(name) {
  return name.replace(/\s/g, '-').replace(/\//g, '-').replace(/\d+-/g, '').replace(/--+/g, '-').toLowerCase();
}
