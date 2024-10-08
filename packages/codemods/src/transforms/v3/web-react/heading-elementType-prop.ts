import { API, FileInfo } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and Heading specifier
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
        name: 'Heading',
      },
    });

    // Check if Heading specifier is present
    if (componentSpecifier.length > 0) {
      // Find Heading components in the module
      const components = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'Heading',
        },
      });

      // Add 'elementType' prop if it's not already present
      components.forEach((component) => {
        const elementTypeProp = component.node.attributes?.find(
          (attribute) => attribute.type === 'JSXAttribute' && attribute.name.name === 'elementType',
        );

        if (!elementTypeProp) {
          component.node.attributes?.push(j.jsxAttribute(j.jsxIdentifier('elementType'), j.stringLiteral('div')));
        }
      });
    }
  }

  return root.toSource();
};

export default transform;
