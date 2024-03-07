// Install jscodeshift if you haven't already
// npm install -g jscodeshift

// Run with:
// jscodeshift --transform ./transforms/transformComponentNameExample.ts --extensions tsx ./transforms/src

// Result:
// Will change import from Tooltip to TooltipModern in all files where @lmc-eu/spirit-web-react

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
    // Update import statement
    importStatements.forEach((importPath) => {
      const importSpecifiers = importPath.value.specifiers;

      // Find the Tooltip import specifier
      const tooltipSpecifier = importSpecifiers.find((specifier) => specifier.imported.name === 'Tooltip');

      if (tooltipSpecifier) {
        // Rename import specifier to 'TooltipModern'
        tooltipSpecifier.local.name = 'TooltipModern';

        // Update the source value of the import statement
        importPath.value.source.value = '../../src/components/TooltipModern';
      }
    });

    // Find opening tags for Tooltip components
    root
      .find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'Tooltip',
        },
      })
      .forEach((tooltipPath) => {
        // Change component name to 'TooltipModern'
        tooltipPath.node.name.name = 'TooltipModern';
      });

    // Find closing tags for Tooltip components
    root
      .find(j.JSXClosingElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'Tooltip',
        },
      })
      .forEach((closingTagPath) => {
        // Change closing tag name to 'TooltipModern'
        closingTagPath.node.name.name = 'TooltipModern';
      });
  }

  return root.toSource();
};

export default transform;
