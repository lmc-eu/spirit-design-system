import { API, FileInfo, JSXIdentifier, JSXOpeningElement, JSXClosingElement } from 'jscodeshift';
import { removeParentheses } from '../../../helpers';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and UNSTABLE_Toggle specifier
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
        name: 'UNSTABLE_Toggle',
      },
    });

    // Check if UNSTABLE_Toggle specifier is present
    if (componentSpecifier.length > 0) {
      // Find opening tags for UNSTABLE_Toggle components
      root
        .find<JSXOpeningElement>(j.JSXOpeningElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'UNSTABLE_Toggle',
          },
        })
        .forEach((openingTagPath) => {
          // Change component name to 'Toggle'
          if (openingTagPath.node.name.type === 'JSXIdentifier') {
            (openingTagPath.node.name as JSXIdentifier).name = 'Toggle';
          }
        });

      // Find closing tags for UNSTABLE_Toggle components
      root
        .find<JSXClosingElement>(j.JSXClosingElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'UNSTABLE_Toggle',
          },
        })
        .forEach((closingTagPath) => {
          // Change closing tag name to 'Toggle'
          if (closingTagPath.node.name.type === 'JSXIdentifier') {
            (closingTagPath.node.name as JSXIdentifier).name = 'Toggle';
          }
        });

      // Change 'UNSTABLE_Toggle' to 'Toggle' in import statement
      componentSpecifier.forEach((path) => {
        j(path).replaceWith(j.importSpecifier(j.identifier('Toggle'), j.identifier('Toggle')));
      });
    }
  }

  return removeParentheses(root.toSource());
};

export default transform;
