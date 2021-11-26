const entryPoints = [
  { dirs: [], bundleName: 'main' },
  { dirs: ['components'] },
  { dirs: ['components', 'Button'] },
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

exports.forEach = function (callback, context) {
  entryPoints.forEach(callback, context);
};

exports.map = function map(callback, context) {
  return entryPoints.map(callback, context);
};

const pathPosix = require('path').posix;

exports.check = function (id, parentId) {
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
        entryPointIndex === parentEntryPointIndex &&
        arraysEqualUpTo(importedParts, parentParts, entryPointIndex);

      // If the imported ID and the parent ID have the same longest entry
      // point prefix, then this import is safely confined within that
      // entry point. Returning false lets Rollup know this import is not
      // external, and can be bundled into the CJS bundle that we build
      // for this shared entry point.
      if (sameEntryPoint) {
        return false;
      }

      console.warn(
        `Risky cross-entry-point nested import of ${id} in ${partsAfterDist(
          parentId,
        ).join('/')}`,
      );
    }
  }

  return false;
};

function partsAfterDist(id) {
  const parts = id.split(pathPosix.sep);
  const distIndex = parts.lastIndexOf('dist');
  if (distIndex >= 0) {
    return parts.slice(distIndex + 1);
  }
}

exports.getEntryPointDirectory = function (file) {
  const parts = partsAfterDist(file) || file.split(pathPosix.sep);
  const len = lengthOfLongestEntryPoint(parts);
  if (len >= 0) return parts.slice(0, len).join(pathPosix.sep);
};

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

function arraysEqualUpTo(a, b, end) {
  for (let i = 0; i < end; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
