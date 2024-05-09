import { API, FileInfo } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and TabItem or TabPane specifier
  const importStatements = root.find(j.ImportDeclaration, {
    source: {
      value: (value: string) => /^@lmc-eu\/spirit-web-react(\/.*)?$/.test(value),
    },
  });

  // Check if the module is imported
  if (importStatements.length > 0) {
    const tabItemComponentSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: 'TabItem',
      },
    });

    const tabPaneComponentSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: 'TabPane',
      },
    });

    // Check if TabItem specifier is present
    if (tabItemComponentSpecifier.length > 0) {
      // Find TabItem components in the module
      const components = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'TabItem',
        },
      });

      // Rename 'forTab' attribute to 'forTabPane'
      components
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: 'forTab',
          },
        })
        .forEach((attributePath) => {
          attributePath.node.name.name = 'forTabPane';
        });
    }

    // Check if TabPane specifier is present
    if (tabPaneComponentSpecifier.length > 0) {
      // Find TabPane components in the module
      const components = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'TabPane',
        },
      });

      // Rename 'tabId' attribute to 'id'
      components
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: 'tabId',
          },
        })
        .forEach((attributePath) => {
          attributePath.node.name.name = 'id';
        });
    }
  }

  return root.toSource();
};

export default transform;
