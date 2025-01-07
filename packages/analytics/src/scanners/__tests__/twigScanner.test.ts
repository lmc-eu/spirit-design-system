import fs from 'fs';
import { fs as zxFs, path } from 'zx';
import * as twigScanner from '../twigScanner';

jest.mock('zx', () => ({
  fs: {
    readdirSync: jest.fn(),
    readFileSync: jest.fn(),
    lstatSync: jest.fn(),
  },
  path: jest.requireActual('path'),
}));

describe('twigScanner', () => {
  describe('getComponentsFromDirectory', () => {
    it('should return an array of component names, capitalize first letter and remove `.twig` extension', () => {
      const mockedReaddirSync = zxFs.readdirSync as jest.Mock;
      mockedReaddirSync.mockReturnValue(['component1.twig', 'component2.twig', 'component3.twig']);
      const directoryPath = '/path/to/directory';
      const expectedComponents = ['Component1', 'Component2', 'Component3'];

      const result = twigScanner.getComponentsFromDirectory(directoryPath);

      expect(result).toEqual(expectedComponents);
      expect(mockedReaddirSync).toHaveBeenCalledWith(directoryPath);
    });
  });

  describe('getPathsFromYamlConfig', () => {
    it('should return an array of component names, capitalize first letter and remove `.twig` extension', () => {
      const twigConfig = `
      spirit_web_twig:
        paths:
          - "%kernel.project_dir%/app/Resources/views"
          - "%kernel.project_dir%/../spirit-web-twig-bundle/docs/twig-components"
        icons:
          paths:
            - "%kernel.project_dir%/../spirit-web-twig-bundle/static"
              `;
      const mockedReadFileSync = zxFs.readFileSync as jest.Mock;
      mockedReadFileSync.mockReturnValue(twigConfig);
      const configFile = '/path/to/config/file';
      const expectedResult = [
        './app/Resources/views/*.twig',
        './../spirit-web-twig-bundle/docs/twig-components/*.twig',
        './../spirit-web-twig-bundle/static/*.twig',
      ];

      const result = twigScanner.getPathsFromYamlConfig(configFile);

      expect(result).toEqual(expectedResult);
      expect(mockedReadFileSync).toHaveBeenCalledWith(configFile, 'utf8');
    });
  });

  describe('determineModuleNameFromComponents', () => {
    it('should return "local_component" if the nodeName is in the localComponents array', () => {
      const nodeName = 'Component1';
      const localComponents = ['Component1', 'Component2', 'Component3'];
      const baseComponents = ['BaseComponent1', 'BaseComponent2'];

      const result = twigScanner.determineModuleNameFromComponents(nodeName, localComponents, baseComponents);

      expect(result).toBe('local_component');
    });

    it('should return "local_component" if the nodeName is not in the localComponents array but it is a Component', () => {
      const nodeName = 'ComponentTest';
      const localComponents = ['Component1', 'Component2', 'Component3'];
      const baseComponents = ['BaseComponent1', 'BaseComponent2'];

      const result = twigScanner.determineModuleNameFromComponents(nodeName, localComponents, baseComponents);

      expect(result).toBe('local_component');
    });

    it('should return "@lmc-eu/spirit-web-twig" if the nodeName is in the baseComponents array', () => {
      const nodeName = 'BaseComponent2';
      const localComponents = ['Component1', 'Component2', 'Component3'];
      const baseComponents = ['BaseComponent1', 'BaseComponent2'];

      const result = twigScanner.determineModuleNameFromComponents(nodeName, localComponents, baseComponents);

      expect(result).toBe('@lmc-eu/spirit-web-twig');
    });

    it('should return "html_element" if the nodeName is not in the localComponents or baseComponents array', () => {
      const nodeName = 'div';
      const localComponents = ['Component1', 'Component2', 'Component3'];
      const baseComponents = ['BaseComponent1', 'BaseComponent2'];

      const result = twigScanner.determineModuleNameFromComponents(nodeName, localComponents, baseComponents);

      expect(result).toBe('html_element');
    });
  });

  describe('searchFileForComponents', () => {
    it('should return an empty object if file content is empty', () => {
      const file = '';
      const localComponents: Array<string> = [];
      const baseComponents: Array<string> = [];
      const mockedReadFileSync = zxFs.readFileSync as jest.Mock;
      mockedReadFileSync.mockReturnValue(file);

      const result = twigScanner.searchFileForComponents(file, localComponents, baseComponents);

      expect(result).toEqual({});
    });

    it('should return the correct components with their props', () => {
      const file = 'app/Resources/views/.../card.twig';
      const fileContent = `
      <Button color="primary" size="small">Click me</Button>
      <Input type="text" placeholder="Enter your name" />
      <CustomComponent prop1="value1" prop2="value2" />
    `;
      const localComponents = ['Button', 'Input', 'CustomComponent'];
      const baseComponents: Array<string> = [];
      const mockedReadFileSync = zxFs.readFileSync as jest.Mock;
      mockedReadFileSync.mockReturnValue(fileContent);

      const result = twigScanner.searchFileForComponents(file, localComponents, baseComponents);

      expect(result).toEqual({
        'local_component:Button': [
          {
            path: 'app/Resources/views/.../card.twig:2',
            props: {
              color: 'primary',
              size: 'small',
            },
          },
        ],
        'local_component:CustomComponent': [
          {
            path: 'app/Resources/views/.../card.twig:4',
            props: {
              prop1: 'value1',
              prop2: 'value2',
            },
          },
        ],
        'local_component:Input': [
          {
            path: 'app/Resources/views/.../card.twig:3',
            props: {
              placeholder: 'Enter your name',
              type: 'text',
            },
          },
        ],
      });
    });
  });

  describe('searchDirectoryForComponents', () => {
    it('should return an empty object if the directory is excluded', () => {
      const dir = '/path/to/excluded/directory';
      const localComponents: Array<string> = [];
      const baseComponents: Array<string> = [];
      const exclude: Array<string> = ['/path/to/excluded/directory'];

      const lstatResult = { isDirectory: () => false } as fs.Stats;
      const dirContent: fs.Dirent[] = ['file1.twig', 'file2.twig'] as unknown as fs.Dirent[];
      const mockedReaddirSync = zxFs.readdirSync as jest.Mock;
      mockedReaddirSync.mockReturnValue(dirContent);
      const mockedLstatSync = zxFs.readdirSync as jest.Mock;
      mockedLstatSync.mockReturnValue(lstatResult);
      jest.spyOn(path, 'extname').mockReturnValue('.twig');
      jest.spyOn(path, 'basename').mockReturnValue(dir);
      jest.spyOn(path, 'join').mockImplementation((directory, file) => `${directory}/${file}`);

      const result = twigScanner.searchDirectoryForComponents(dir, localComponents, baseComponents, exclude);

      expect(result).toEqual({});
    });

    it('should return an empty object if the directory is empty', () => {
      const dir = '/path/to/empty/directory';
      const localComponents: Array<string> = [];
      const baseComponents: Array<string> = [];
      const exclude: Array<string> = [];

      const lstatResult = { isDirectory: () => false } as fs.Stats;

      const mockedLstatSync = zxFs.readdirSync as jest.Mock;
      mockedLstatSync.mockReturnValue(lstatResult);
      jest.spyOn(path, 'extname').mockReturnValue('.twig');
      jest.spyOn(path, 'join').mockImplementation((directory, file) => `${directory}/${file}`);
      const mockedReaddirSync = zxFs.readdirSync as jest.Mock;
      mockedReaddirSync.mockReturnValue([]);

      const result = twigScanner.searchDirectoryForComponents(dir, localComponents, baseComponents, exclude);

      expect(result).toEqual({});
      expect(zxFs.readdirSync).toHaveBeenCalledWith(dir);
    });

    it('should recursively search the directory for .twig files and call searchFileForComponents', () => {
      const dir = '/path/to/directory';
      const localComponents = ['Button', 'Input', 'CustomComponent'];
      const baseComponents: Array<string> = [];
      const exclude: Array<string> = [];
      const lstatResult = { isDirectory: () => false } as fs.Stats;
      const dirContent: fs.Dirent[] = ['file1.twig', 'file2.twig'] as unknown as fs.Dirent[];

      const mockedReaddirSync = zxFs.readdirSync as jest.Mock;
      mockedReaddirSync.mockReturnValue(dirContent);
      const mockedLstatSync = zxFs.lstatSync as jest.Mock;
      mockedLstatSync.mockReturnValue(lstatResult);
      const mockedExtname = jest.spyOn(path, 'extname').mockReturnValue('.twig');
      const mockedPathJoin = jest.spyOn(path, 'join').mockImplementation((directory, file) => `${directory}/${file}`);

      const result = twigScanner.searchDirectoryForComponents(dir, localComponents, baseComponents, exclude);

      expect(result).toEqual({
        'local_component:Button': [
          {
            path: '/path/to/directory/file2.twig:2',
            props: {
              color: 'primary',
              size: 'small',
            },
          },
        ],
        'local_component:CustomComponent': [
          {
            path: '/path/to/directory/file2.twig:4',
            props: {
              prop1: 'value1',
              prop2: 'value2',
            },
          },
        ],
        'local_component:Input': [
          {
            path: '/path/to/directory/file2.twig:3',
            props: {
              placeholder: 'Enter your name',
              type: 'text',
            },
          },
        ],
      });
      expect(mockedReaddirSync).toHaveBeenCalledWith(dir);
      expect(mockedLstatSync).toHaveBeenCalledTimes(2);
      expect(mockedExtname).toHaveBeenCalledTimes(2);
      expect(mockedPathJoin).toHaveBeenCalledTimes(2);
    });
  });
});
