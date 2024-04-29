import { API, FileInfo, JSXIdentifier, JSXOpeningElement, JSXClosingElement } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and TooltipModern specifier
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
        name: 'TooltipModern',
      },
    });

    // Check if TooltipModern specifier is present
    if (componentSpecifier.length > 0) {
      // Find opening tags for TooltipModern components
      root
        .find<JSXOpeningElement>(j.JSXOpeningElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'TooltipModern',
          },
        })
        .forEach((openingTagPath) => {
          // Change component name to 'Tooltip'
          if (openingTagPath.node.name.type === 'JSXIdentifier') {
            (openingTagPath.node.name as JSXIdentifier).name = 'Tooltip';
          }
        });

      // Find closing tags for TooltipModern components
      root
        .find<JSXClosingElement>(j.JSXClosingElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'TooltipModern',
          },
        })
        .forEach((closingTagPath) => {
          // Change closing tag name to 'Tooltip'
          if (closingTagPath.node.name.type === 'JSXIdentifier') {
            (closingTagPath.node.name as JSXIdentifier).name = 'Tooltip';
          }
        });

      // Change 'TooltipModern' to 'Tooltip' in import statement
      componentSpecifier.forEach((path) => {
        j(path).replaceWith(j.importSpecifier(j.identifier('Tooltip'), j.identifier('Tooltip')));
      });
    }
  }

  return root.toSource();
};

export default transform;
