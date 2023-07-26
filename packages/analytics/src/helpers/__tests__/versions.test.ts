import { fs, globby } from 'zx';
import { getVersions } from '../versions';

jest.mock('zx', () => {
  const mGlobby = jest.fn();
  const mFs = {
    readFile: jest.fn(),
  };

  return {
    fs: mFs,
    globby: mGlobby,
  };
});

describe('versions', () => {
  describe('getVersions', () => {
    it('should return the correct version when a matching lock file is found', async () => {
      // Mock the return value of globby
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error Property 'mockResolvedValue' does not exist on type
      globby.mockResolvedValue(['/path/to/yarn.lock']);

      // Mock the return value of fs.readFile
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error Property 'mockResolvedValue' does not exist on type
      fs.readFile.mockResolvedValue(`
        Some content before
        https://registry.yarnpkg.com/@lmc-eu/spirit-web-react/-/spirit-web-react-^1.2.0-beta.1.tgz
        Some content after
      `);

      const pathToFolder = '/path/to/folder';
      const version = await getVersions(pathToFolder);
      expect(version).toBe('^1.2.0-beta.1');
    });

    it('should return an empty string when no matching lock file is found', async () => {
      // Mock the return value of globby (no lock files found)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error Property 'mockResolvedValue' does not exist on type
      globby.mockResolvedValue([]);

      const pathToFolder = '/path/to/folder';
      const version = await getVersions(pathToFolder);
      expect(version).toBe('');
    });

    it('should return the correct version when a mtching lock file is found with spirit-web-react', async () => {
      // Mock the return value of globby
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error Property 'mockResolvedValue' does not exist on type
      globby.mockResolvedValue(['/path/to/package-lock.json']);

      // Mock the return value of fs.readFile (no matching version found)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error Property 'mockResolvedValue' does not exist on type
      (fs.readFile as jest.Mock).mockResolvedValue(`
        Some content before
        https://registry.npmjs.org/@lmc-eu/spirit-web-react/-/spirit-web-react-1.0.0.tgz
        Some content after
      `);

      const pathToFolder = '/path/to/folder';
      const version = await getVersions(pathToFolder);
      expect(version).toBe('1.0.0');
    });
  });
});
