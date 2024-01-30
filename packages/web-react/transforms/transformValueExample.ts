// Install jscodeshift if you haven't already
// npm install -g jscodeshift

// Run with:
// jscodeshift --transform ./transforms/transformValueExample.ts --extensions tsx ./transforms/src

// Result:
// Will replace *-left to *-start etc. Tooltip components imported from '@lmc-eu/spirit-web-react'

const transform = (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module
  const importStatements = root.find(j.ImportDeclaration, {
    source: {
      // value: '@lmc-eu/spirit-web-react',
      value: '../../src/components/Tooltip', // local import (testing file)
    },
  });

  // Check if the module is imported
  if (importStatements.length > 0) {
    const tooltipSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: 'Tooltip',
      },
    });

    // Check if Tooltip specifier is present
    if (tooltipSpecifier.length > 0) {
      // Find Tooltip components in the module
      const tooltipComponents = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'Tooltip',
        },
      });

      tooltipComponents
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: 'placement',
          },
          value: {
            type: 'Literal',
            value: (val) =>
              val.includes('-left') || val.includes('-right') || val.includes('-top') || val.includes('-bottom'),
          },
        })
        .forEach((attributePath) => {
          // Update attribute value
          attributePath.node.value.value = attributePath.node.value.value
            .replace('-left', '-start')
            .replace('-right', '-end')
            .replace('-top', '-start')
            .replace('-bottom', '-end');
        });
    }
  }

  return root.toSource();
};

export default transform;
