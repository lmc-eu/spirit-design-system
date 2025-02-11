import { API, FileInfo, JSXIdentifier, JSXOpeningElement, JSXClosingElement } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and UNSTABLE_Avatar specifier
  const importStatements = root.find(j.ImportDeclaration, {
    source: {
      value: (value: string) => /^@lmc-eu\/spirit-web-react(\/.*)?$/.test(value),
    },
  });

  // Check if the module is imported
  if (importStatements.length > 0) {
    const componentSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: 'UNSTABLE_Avatar',
      },
    });

    // Check if UNSTABLE_Avatar specifier is present
    if (componentSpecifier.length > 0) {
      // Find opening tags for UNSTABLE_Avatar components
      root
        .find<JSXOpeningElement>(j.JSXOpeningElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'UNSTABLE_Avatar',
          },
        })
        .forEach((openingTagPath) => {
          // Change component name to 'Avatar'
          if (openingTagPath.node.name.type === 'JSXIdentifier') {
            (openingTagPath.node.name as JSXIdentifier).name = 'Avatar';
          }
        });

      // Find closing tags for UNSTABLE_Avatar components
      root
        .find<JSXClosingElement>(j.JSXClosingElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'UNSTABLE_Avatar',
          },
        })
        .forEach((closingTagPath) => {
          // Change closing tag name to 'Avatar'
          if (closingTagPath.node.name.type === 'JSXIdentifier') {
            (closingTagPath.node.name as JSXIdentifier).name = 'Avatar';
          }
        });

      // Change 'UNSTABLE_Avatar' to 'Avatar' in import statement
      componentSpecifier.forEach((path) => {
        j(path).replaceWith(j.importSpecifier(j.identifier('Avatar'), j.identifier('Avatar')));
      });
    }
  }

  return root.toSource();
};

export default transform;
