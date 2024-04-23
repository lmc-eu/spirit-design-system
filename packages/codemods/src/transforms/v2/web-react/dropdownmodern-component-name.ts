import { API, FileInfo, JSXIdentifier, JSXOpeningElement, JSXClosingElement } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and DropdownModern specifier
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
        name: 'DropdownModern',
      },
    });

    // Check if DropdownModern specifier is present
    if (componentSpecifier.length > 0) {
      // Find opening tags for DropdownModern components
      root
        .find<JSXOpeningElement>(j.JSXOpeningElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'DropdownModern',
          },
        })
        .forEach((openingTagPath) => {
          // Change component name to 'Dropdown'
          if (openingTagPath.node.name.type === 'JSXIdentifier') {
            (openingTagPath.node.name as JSXIdentifier).name = 'Dropdown';
          }
        });

      // Find closing tags for DropdownModern components
      root
        .find<JSXClosingElement>(j.JSXClosingElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'DropdownModern',
          },
        })
        .forEach((closingTagPath) => {
          // Change closing tag name to 'Dropdown'
          if (closingTagPath.node.name.type === 'JSXIdentifier') {
            (closingTagPath.node.name as JSXIdentifier).name = 'Dropdown';
          }
        });

      // Change 'DropdownModern' to 'Dropdown' in import statement
      componentSpecifier.forEach((path) => {
        j(path).replaceWith(j.importSpecifier(j.identifier('Dropdown'), j.identifier('Dropdown')));
      });
    }
  }

  return root.toSource();
};

export default transform;
