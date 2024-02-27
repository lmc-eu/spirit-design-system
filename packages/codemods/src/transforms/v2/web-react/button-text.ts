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
    const buttonSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: 'Button',
      },
    });

    // Check if Button specifier is present
    if (buttonSpecifier.length > 0) {
      // Find Button components in the module
      const buttonComponents = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'Button',
        },
      });

      // Rename 'buttonLabel' attribute to 'buttonText'
      buttonComponents
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: 'buttonLabel',
          },
        })
        .forEach((attributePath) => {
          // Change attribute name to 'buttonText'
          attributePath.node.name.name = 'buttonText';
        });
    }
  }

  return root.toSource();
};

export default transform;
