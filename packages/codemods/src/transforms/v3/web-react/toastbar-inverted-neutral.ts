import { API, FileInfo } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and ToastBar specifier
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
        name: 'ToastBar',
      },
    });

    // Check if ToastBar specifier is present
    if (componentSpecifier.length > 0) {
      // Find ToastBar components in the module
      const components = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'ToastBar',
        },
      });

      // If color set to `inverted`, change it to `neutral`
      components
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: 'color',
          },
        })
        .forEach((attributePath) => {
          if (attributePath.node.value?.type === 'StringLiteral' && attributePath.node.value.value === 'inverted') {
            attributePath.node.value.value = 'neutral';
          }
        });
    }
  }

  return root.toSource();
};

export default transform;
