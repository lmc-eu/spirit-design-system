import { resolve } from 'path';
import { readdirSync } from 'fs';

const getDirs = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export const getNestedDirs = (baseDir, mainFile) =>
  getDirs(resolve(__dirname, `../${baseDir}`)).reduce(
    (accumulator, dirName) => ({
      ...accumulator,
      [dirName]: resolve(__dirname, `../${baseDir}/${dirName}/${mainFile}`),
    }),
    {},
  );
