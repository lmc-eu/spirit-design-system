// https://github.com/TooTallNate/util-deprecate/blob/master/browser.js

function config(name: string) {
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  const val = global.localStorage[name];
  if (val == null) return false;

  return String(val).toLowerCase() === 'true';
}

export function deprecate(fn: () => void, msg: string) {
  if (config('noDeprecation')) {
    return fn;
  }

  let warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }

    // eslint-disable-next-line prefer-rest-params
    return fn.apply(this, arguments);
  }

  return deprecated;
}
