const entryPoints = [
  { dirs: [], bundleName: 'main' },
  { dirs: ['context'] },
  { dirs: ['hooks'] },
  { dirs: ['components'] },
  { dirs: ['components', 'Alert'] },
  { dirs: ['components', 'Button'] },
  { dirs: ['components', 'CheckboxField'] },
  { dirs: ['components', 'Container'] },
  { dirs: ['components', 'Grid'] },
  { dirs: ['components', 'Header'] },
  { dirs: ['components', 'Heading'] },
  { dirs: ['components', 'Link'] },
  { dirs: ['components', 'Stack'] },
  { dirs: ['components', 'Tabs'] },
  { dirs: ['components', 'Tag'] },
  { dirs: ['components', 'Text'] },
  { dirs: ['components', 'TextField'] },
];

const lookupTrie = Object.create(null);
entryPoints.forEach((info) => {
  let node = lookupTrie;
  info.dirs.forEach((dir) => {
    const dirs = node.dirs || (node.dirs = Object.create(null));
    node = dirs[dir] || (dirs[dir] = { isEntry: false });
  });
  node.isEntry = true;
});

exports.forEach = function forEach(callback, context) {
  entryPoints.forEach(callback, context);
};

exports.map = function map(callback, context) {
  return entryPoints.map(callback, context);
};

const pathPosix = require('path').posix;

/**
 * Get the length of the longest entry point.
 *
 * @param {Array} parts
 * @returns {number}
 */
function lengthOfLongestEntryPoint(parts) {
  let node = lookupTrie;
  let longest = -1;
  for (let i = 0; node && i < parts.length; ++i) {
    if (node.isEntry) longest = i;
    node = node.dirs && node.dirs[parts[i]];
  }
  if (node && node.isEntry) {
    return parts.length;
  }

  return longest;
}

/**
 * Get array of parts of a path after the dist directory.
 *
 * @param {string} id
 * @returns {Array<string>|null}
 */
function partsAfterDist(id) {
  const parts = id.split(pathPosix.sep);
  const distIndex = parts.lastIndexOf('dist');
  if (distIndex >= 0) {
    return parts.slice(distIndex + 1);
  }

  return null;
}

/**
 * Check array equality up to a certain length.
 *
 * @param {Array} a
 * @param {Array} b
 * @param {number} end
 * @returns {boolean}
 */
function arraysEqualUpTo(a, b, end) {
  for (let i = 0; i < end; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

exports.check = function check(id, parentId) {
  const resolved = pathPosix.resolve(pathPosix.dirname(parentId), id);
  const importedParts = partsAfterDist(resolved);

  if (importedParts) {
    const entryPointIndex = lengthOfLongestEntryPoint(importedParts);
    if (entryPointIndex === importedParts.length) {
      return true;
    }

    if (entryPointIndex >= 0) {
      const parentParts = partsAfterDist(parentId);
      const parentEntryPointIndex = lengthOfLongestEntryPoint(parentParts);
      const sameEntryPoint =
        entryPointIndex === parentEntryPointIndex && arraysEqualUpTo(importedParts, parentParts, entryPointIndex);

      // If the imported ID and the parent ID have the same longest entry
      // point prefix, then this import is safely confined within that
      // entry point. Returning false lets Rollup know this import is not
      // external, and can be bundled into the CJS bundle that we build
      // for this shared entry point.
      if (sameEntryPoint) {
        return false;
      }

      // eslint-disable-next-line no-console
      console.warn(`Risky cross-entry-point nested import of ${id} in ${partsAfterDist(parentId).join('/')}`);
    }
  }

  return false;
};

exports.getEntryPointDirectory = function getEntryPointDirectory(file) {
  const parts = partsAfterDist(file) || file.split(pathPosix.sep);
  const len = lengthOfLongestEntryPoint(parts);
  if (len >= 0) return parts.slice(0, len).join(pathPosix.sep);

  return null;
};
