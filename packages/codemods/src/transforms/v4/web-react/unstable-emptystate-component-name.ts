import { API, FileInfo, JSXIdentifier, JSXOpeningElement, JSXClosingElement } from 'jscodeshift';
import { removeParentheses } from '../../../helpers';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const importStatements = root.find(j.ImportDeclaration, {
    source: {
      value: (value: string) => /^@lmc-eu\/spirit-web-react(\/.*)?$/.test(value),
    },
  });

  if (importStatements.length > 0) {
    const componentsToRename = [
      { unstable: 'UNSTABLE_EmptyState', stable: 'EmptyState' },
      { unstable: 'UNSTABLE_EmptyStateSection', stable: 'EmptyStateSection' },
    ];

    componentsToRename.forEach(({ unstable, stable }) => {
      const componentSpecifier = importStatements.find(j.ImportSpecifier, {
        imported: {
          type: 'Identifier',
          name: unstable,
        },
      });

      if (componentSpecifier.length > 0) {
        root
          .find<JSXOpeningElement>(j.JSXOpeningElement, {
            name: {
              type: 'JSXIdentifier',
              name: unstable,
            },
          })
          .forEach((openingTagPath) => {
            if (openingTagPath.node.name.type === 'JSXIdentifier') {
              (openingTagPath.node.name as JSXIdentifier).name = stable;
            }
          });

        root
          .find<JSXClosingElement>(j.JSXClosingElement, {
            name: {
              type: 'JSXIdentifier',
              name: unstable,
            },
          })
          .forEach((closingTagPath) => {
            if (closingTagPath.node.name.type === 'JSXIdentifier') {
              (closingTagPath.node.name as JSXIdentifier).name = stable;
            }
          });

        componentSpecifier.forEach((path) => {
          j(path).replaceWith(j.importSpecifier(j.identifier(stable), j.identifier(stable)));
        });
      }
    });
  }

  return removeParentheses(root.toSource());
};

export default transform;
