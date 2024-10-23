import { API, FileInfo } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and Button specifier
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
        name: 'Button',
      },
    });

    // Check if Button specifier is present
    if (componentSpecifier.length > 0) {
      // Find Button components in the module
      const components = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'Button',
        },
      });

      // Rename 'isSquare' attribute to 'isSymmetrical'
      components
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: 'isSquare',
          },
        })
        .forEach((attributePath) => {
          attributePath.node.name.name = 'isSymmetrical';
        });
    }
  }

  return root.toSource();
};

export default transform;
