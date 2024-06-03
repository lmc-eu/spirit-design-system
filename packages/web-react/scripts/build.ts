import { readdirSync, existsSync } from 'fs';
import { resolve } from 'path';

const getDirs = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export const getNestedDirs = (baseDir, mainFile) =>
  getDirs(resolve(__dirname, `../${baseDir}`)).reduce(
    (accumulator, dirName) => ({
      ...accumulator,
      ...(existsSync(resolve(__dirname, `../${baseDir}/${dirName}/${mainFile}`))
        ? { [dirName]: resolve(__dirname, `../${baseDir}/${dirName}/${mainFile}`) }
        : {}),
    }),
    {},
  );
