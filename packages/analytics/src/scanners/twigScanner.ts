import { fs, glob, path } from 'zx';

// Get list of names of Spirit components from twig-components directory in SPIRIT_COMPONENTS_PATH
export function getComponentsFromDirectory(directoryPath: string) {
  // `component.twig` -> `Component`
  return fs.readdirSync(directoryPath).map((file: string) => `${file.charAt(0).toUpperCase()}${file.slice(1, -5)}`);
}

export function getPathsFromYamlConfig(configFile: string) {
  // Get lines of TwigX config file
  // Input: TWIGX_CONFIG_FILE (path)
  // Output example: ['spirit_web_twig:', '    paths:', '        - "%kernel.project_dir%/app/Resources/views"', ...]
  const twigXConfigLines = fs.readFileSync(configFile, 'utf8').split('\n');

  // Get paths from TwigX config file
  // Input: twigXConfigLines (array)
  // Output example:
  //   ['app/Resources/views/**/*.twig', 'vendor/lmc/spirit-web-twig-bundle/src/Resources/twig-components/**/*.twig']
  return twigXConfigLines
    .filter((line: string) => line.trim().startsWith('-'))
    .map(
      (line: string) =>
        `${line
          .trim()
          .substring(1)
          .trim()
          .replace(/"/g, '')
          .replace(/^%kernel.\w+%/, '.')}/*.twig`,
    );
}

// Get list of names of local components from TwigX paths
// Input: twigXPaths (array)
// Output example: ['Card', 'Header', ...]
export async function getLocalComponentsFromPaths(paths: Array<string>): Promise<Array<string>> {
  // Type '(error: unknown, files: string[]) => void' has no properties in common with type 'Options'.
  // @ts-expect-error -- TS2559
  return glob(paths, (error: unknown, files: Array<string>) => {
    if (!error) {
      return files.map(
        (file: string) => path.basename(file).charAt(0).toUpperCase() + path.basename(file).slice(1, -5),
      );
    }

    return [];
  });
}

// Get module name from node name
// Input: nodeName (string)
// Output example: 'local_component', '@lmc-eu/spirit-web-twig', 'html_element'
export function determineModuleNameFromComponents(
  nodeName: string,
  localComponents: Array<string>,
  baseComponents: Array<string>,
) {
  if (baseComponents.includes(nodeName)) {
    return '@lmc-eu/spirit-web-twig';
  }

  const pascalCaseRegex = /^([A-Z][a-z0-9]+)+$/;
  if (localComponents.includes(nodeName) || nodeName.match(pascalCaseRegex)) {
    return 'local_component';
  }

  return 'html_element';
}

interface Props {
  [key: string]: string;
}

interface Node {
  path: string;
  props: Props;
}

interface Result {
  [key: string]: Node[];
}

// Search file for adoption data and save it to result
// Input: file (path)
// Output example: { 'local_component:Card': [{ path: 'app/Resources/views/.../card.twig:1', props: { ... } }], ...
export function searchFileForComponents(file: string, localComponents: Array<string>, baseComponents: Array<string>) {
  const reStartTag = /<([a-zA-Z][a-zA-Z0-9]*)([^>]*)>/g;
  const reAttr = /([\w-]+)="?([^"]*)"?/g;

  const result: Result = {};

  const fileContent = fs.readFileSync(file, 'utf-8');

  let match = reStartTag.exec(fileContent);
  while (match !== null) {
    const [, nodeName, attrs] = match;

    const nodeStartPos = match.index;
    const numLineBreaks = fileContent.slice(0, nodeStartPos).match(/\n/g)?.length ?? 0;

    const moduleName = determineModuleNameFromComponents(nodeName, localComponents, baseComponents);
    const fullName = `${moduleName}:${nodeName}`;

    const node: Node = {
      path: `${file}:${numLineBreaks + 1}`,
      props: {},
    };

    attrs.replace(reAttr, (attrMatchString, name, value) => {
      node.props[name] = value.replace(/\n\s+/g, '');

      return '';
    });

    if (!result[fullName]) {
      result[fullName] = [];
    }

    result[fullName].push(node);
    match = reStartTag.exec(fileContent);
  }

  return result;
}

// Search directory for twig files and call searchInFile for each of them
// Input: dir (path)
export function searchDirectoryForComponents(
  dir: string,
  localComponents: Array<string>,
  baseComponents: Array<string>,
  exclude: Array<string>,
): Result {
  let result: Result = {};

  if (!exclude.includes(path.basename(dir))) {
    const files = fs.readdirSync(dir);
    files.forEach((file: string) => {
      const filePath = path.join(dir, file);
      const fileStat = fs.lstatSync(filePath);

      if (fileStat.isDirectory()) {
        result = { ...result, ...searchDirectoryForComponents(filePath, localComponents, baseComponents, exclude) };
      } else if (path.extname(filePath) === '.twig') {
        result = { ...result, ...searchFileForComponents(filePath, localComponents, baseComponents) };
      }
    });
  }

  return result;
}

export const output = (data: unknown, destination: string) => {
  // Create output folder if missing
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  // Save result to output file
  fs.writeFileSync(destination, JSON.stringify(data, null, 2));
};

export interface TwigScannerOptions {
  coreComponentsPath?: string;
  configFile?: string;
  rootPath?: string;
  exclude?: Array<string>;
  outputFile?: string;
  crawlFrom: string;
}

export default async function twigScanner(options: TwigScannerOptions) {
  const spiritComponents = getComponentsFromDirectory(path.resolve(process.cwd(), options.coreComponentsPath || ''));
  const twigXPaths = getPathsFromYamlConfig(path.resolve(process.cwd(), options.configFile || ''));
  const localComponents = await getLocalComponentsFromPaths(twigXPaths);

  const result = searchDirectoryForComponents(
    path.resolve(process.cwd(), options.rootPath || ''),
    localComponents,
    spiritComponents,
    options.exclude || [],
  );

  output(result, path.resolve(process.cwd(), options.outputFile || ''));

  return result;
}
