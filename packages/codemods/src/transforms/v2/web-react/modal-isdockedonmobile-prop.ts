import { API, FileInfo } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and ModalDialog specifier
  const importStatements = root.find(j.ImportDeclaration, {
    source: {
      value: (value: string) => /^@lmc-eu\/spirit-web-react(\/.*)?$/.test(value),
    },
  });

  // Check if the module is imported
  if (importStatements.length > 0) {
    const modalDialogSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: 'ModalDialog',
      },
    });

    // Check if ModalDialog specifier is present
    if (modalDialogSpecifier.length > 0) {
      // Find ModalDialog components in the module
      const modalDialogComponents = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'ModalDialog',
        },
      });

      modalDialogComponents.forEach((path) => {
        if (path.node && path.node.attributes) {
          // Check if the component already has the isDockedOnMobile attribute
          const hasIsDockedOnMobileAttribute = path.node.attributes.some(
            (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'isDockedOnMobile',
          );

          // If not, add isDockedOnMobile attribute
          if (!hasIsDockedOnMobileAttribute) {
            path.node.attributes.push(j.jsxAttribute(j.jsxIdentifier('isDockedOnMobile'), null));
          }
        }
      });
    }
  }

  return root.toSource();
};

export default transform;
