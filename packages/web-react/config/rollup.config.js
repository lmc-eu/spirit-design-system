import { terser as minify } from 'rollup-plugin-terser';
import path from 'path';

const entryPoints = require('../scripts/entryPoints');

const distDir = './dist';

// Adapted from https://github.com/meteor/meteor/blob/devel/tools/static-assets/server/mini-files.ts
function toPosixPath(p) {
  // Sometimes, you can have a path like \Users\IEUser on windows, and this
  // actually means you want C:\Users\IEUser
  let posixPath = p;
  if (p[0] === '\\') {
    posixPath = process.env.SystemDrive + p;
  }

  posixPath = posixPath.replace(/\\/g, '/');
  if (posixPath[1] === ':') {
    // Transform "C:/bla/bla" to "/c/bla/bla"
    posixPath = `/${posixPath[0]}${posixPath.slice(2)}`;
  }

  return posixPath;
}

function isExternal(id, parentId, entryPointsAreExternal = true) {
  // Rollup v2.26.8 started passing absolute id strings to this function, thanks
  // apparently to https://github.com/rollup/rollup/pull/3753, so we relativize
  // the id again in those cases.
  let absoluteId = id;
  if (path.isAbsolute(id)) {
    const posixId = toPosixPath(id);
    const posixParentId = toPosixPath(parentId);
    absoluteId = path.posix.relative(
      path.posix.dirname(posixParentId),
      posixId,
    );
    if (!absoluteId.startsWith('.')) {
      absoluteId = `./${absoluteId}`;
    }
  }

  const isRelative =
    absoluteId.startsWith('./') || absoluteId.startsWith('../');

  if (!isRelative) {
    return true;
  }

  if (entryPointsAreExternal && entryPoints.check(absoluteId, parentId)) {
    return true;
  }

  return false;
}

function prepareCJS(input, output) {
  return {
    input,
    external(id, parentId) {
      return isExternal(id, parentId, false);
    },
    output: {
      file: output,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      externalLiveBindings: false,
    },
  };
}

function prepareCJSMinified(input) {
  return {
    input,
    output: {
      file: input.replace('.cjs', '.min.cjs'),
      format: 'cjs',
    },
    plugins: [
      minify({
        mangle: {
          toplevel: true,
        },
        compress: {
          toplevel: true,
          global_defs: {
            '@__DEV__': 'false',
          },
        },
      }),
    ],
  };
}

function prepareBundle({ dirs, bundleName = dirs[dirs.length - 1] }) {
  const dir = path.join(distDir, ...dirs);

  return {
    input: `${dir}/index.js`,
    external(id, parentId) {
      return isExternal(id, parentId, true);
    },
    output: {
      file: `${dir}/${bundleName}.cjs`,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      externalLiveBindings: false,
    },
  };
}

export default [
  ...entryPoints.map(prepareBundle),
  // Convert the ESM entry point to a single CJS bundle.
  prepareCJS('./dist/index.js', './dist/spirit-web-react.cjs'),
  prepareCJSMinified('./dist/spirit-web-react.cjs'),
];
