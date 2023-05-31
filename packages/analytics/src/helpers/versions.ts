import { fs, globby } from 'zx';

export const getVersions = async (pathToFolder: string) => {
  const lockFiles = await globby(`${pathToFolder}/**/@(yarn.lock|package-lock.json)`);
  let version = '';

  for (const lock of lockFiles) {
    // eslint-disable-next-line no-await-in-loop
    const data = await fs.readFile(lock, 'utf-8');

    const matchedVersion = data.match(
      /https:\/\/registry.(yarnpkg.com|npmjs.org)\/@lmc-eu\/spirit-web-react\/-\/spirit-web-react-[~^]?([\dvx*]+(?:[-.](?:[\dx*]+|alpha|beta))*)/g,
    );

    if (matchedVersion) {
      // eslint-disable-next-line prefer-destructuring
      version = matchedVersion[0].split('-').slice(-1)[0];
    }
  }

  return version;
};
