import { existsSync, readdirSync } from 'fs';
import { resolve } from 'path';

const getDirs = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export const getNestedDirs = (baseDir, mainFile) =>
  getDirs(resolve(__dirname, `../${baseDir}`)).reduce(
    (accumulator, dirName) =>
      existsSync(resolve(__dirname, `../${baseDir}/${dirName}/${mainFile}`))
        ? {
            ...accumulator,
            [dirName]: resolve(__dirname, `../${baseDir}/${dirName}/${mainFile}`),
          }
        : accumulator,
    {},
  );

export const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    // eslint-disable-next-line no-param-reassign -- it's a reducer
    acc[fn(obj[k], k, obj)] = obj[k];

    return acc;
  }, {});
