import { API, FileInfo } from 'jscodeshift';
import { removeParentheses } from '../../../helpers';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and ButtonLink specifier
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
        name: 'ButtonLink',
      },
    });

    // Check if ButtonLink specifier is present
    if (componentSpecifier.length > 0) {
      // Find ButtonLink components in the module
      const components = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'ButtonLink',
        },
      });

      // Rename 'isSquare' attribute to 'isSymmetrical'
      components
        .find(j.JSXAttribute, {
          name: {
            type: 'JSXIdentifier',
            name: 'isSquare',
          },
        })
        .forEach((attributePath) => {
          attributePath.node.name.name = 'isSymmetrical';
        });
    }
  }

  return removeParentheses(root.toSource());
};

export default transform;
