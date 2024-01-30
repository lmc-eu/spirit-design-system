// Install jscodeshift if you haven't already
// npm install -g jscodeshift

// Run with:
// jscodeshift --transform ./transforms/transformAttributeExample.ts --extensions tsx ./transforms/src

// Result:
// Will rename 'text' attribute to 'label' in all Button components imported from '@lmc-eu/spirit-web-react'

const transform = (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and Button specifier
  const importStatements = root.find(j.ImportDeclaration, {
    source: {
      // value: '@lmc-eu/spirit-web-react',
      value: '../../src/components/Button', // local import (testing file)
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
