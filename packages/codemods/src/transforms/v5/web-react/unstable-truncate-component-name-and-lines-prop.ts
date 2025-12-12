import { API, FileInfo } from 'jscodeshift';
import { removeParentheses } from '../../../helpers';
import { renameComponent } from '../../../helpers/renameComponent';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module
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
        name: 'UNSTABLE_Truncate',
      },
    });

    // Check if UNSTABLE_Truncate specifier is present
    if (componentSpecifier.length > 0) {
      // Find UNSTABLE_Truncate components in the module
      const components = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'UNSTABLE_Truncate',
        },
      });

      // Transform 'lines' prop to 'mode="lines"' and 'limit={lines}'
      components.forEach((componentPath) => {
        const linesAttr = componentPath.node.attributes?.find(
          (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'lines',
        );

        if (linesAttr && linesAttr.type === 'JSXAttribute') {
          const linesValue = linesAttr.value;

          // Remove the lines attribute
          componentPath.node.attributes = componentPath.node.attributes?.filter(
            (attr) => !(attr.type === 'JSXAttribute' && attr.name.name === 'lines'),
          );

          // Add mode="lines" attribute
          componentPath.node.attributes?.push(j.jsxAttribute(j.jsxIdentifier('mode'), j.stringLiteral('lines')));

          // Add limit={value} attribute with the original lines value
          componentPath.node.attributes?.push(j.jsxAttribute(j.jsxIdentifier('limit'), linesValue));
        }
      });
    }
  }

  // Rename component from UNSTABLE_Truncate to Truncate
  renameComponent(j, root, 'UNSTABLE_Truncate', 'Truncate');

  return removeParentheses(root.toSource({ quote: 'double' }));
};

export default transform;
