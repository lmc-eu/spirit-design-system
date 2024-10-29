import { API, FileInfo } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const importStatements = root.find(j.ImportDeclaration, {
    source: {
      value: (value: string) => /^@lmc-eu\/spirit-web-react(\/.*)?$/.test(value),
    },
  });

  if (importStatements.length > 0) {
    const headingSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: { type: 'Identifier', name: 'Heading' },
    });

    if (headingSpecifier.length > 0) {
      root
        .find(j.JSXElement, {
          openingElement: {
            name: { type: 'JSXIdentifier', name: 'Heading' },
          },
        })
        .forEach((headingPath) => {
          j(headingPath)
            .find(j.JSXOpeningElement, {
              name: { type: 'JSXIdentifier', name: 'Link' },
            })
            .forEach((linkPath) => {
              if (linkPath.node && linkPath.node.attributes) {
                const hasVisitedStyleAllowedAttribute = linkPath.node.attributes.some(
                  (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'hasVisitedStyleAllowed',
                );

                if (!hasVisitedStyleAllowedAttribute) {
                  linkPath.node.attributes.push(j.jsxAttribute(j.jsxIdentifier('hasVisitedStyleAllowed'), null));
                }
              }
            });
        });
    }
  }

  return root.toSource();
};

export default transform;
