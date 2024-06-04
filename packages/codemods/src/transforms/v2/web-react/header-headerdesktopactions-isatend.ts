import { API, FileInfo } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and HeaderDesktopActions specifier
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
        name: 'HeaderDesktopActions',
      },
    });

    // Check if HeaderDesktopActions specifier is present
    if (componentSpecifier.length > 0) {
      // Find HeaderDesktopActions components in the module
      const components = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'HeaderDesktopActions',
        },
      });

      // Replace color prop
      components
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: 'color',
          },
        })
        .forEach((attributePath) => {
          if (attributePath.value.value?.type === 'StringLiteral') {
            if (attributePath.value.value.value === 'primary') {
              attributePath.prune();
            } else if (attributePath.value.value.value === 'secondary') {
              // Replace color prop with isAtEnd prop without value
              attributePath.node.name.name = 'isAtEnd';
              attributePath.node.value = null;
            }
          }
        });
    }
  }

  return root.toSource();
};

export default transform;
