import { API, FileInfo } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and ModalDialog specifier
  const importStatements = root.find(j.ImportDeclaration, {
    source: {
      value: (value: string) => /^@lmc-eu\/spirit-web-react(\/.*)?$/.test(value),
    },
  });

  // Check if the module is imported
  if (importStatements.length > 0) {
    const modalDialogSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: 'ModalDialog',
      },
    });

    // Check if ModalDialog specifier is present
    if (modalDialogSpecifier.length > 0) {
      // Find ModalDialog components in the module
      const modalDialogComponents = root.find(j.JSXOpeningElement, {
        name: {
          type: 'JSXIdentifier',
          name: 'ModalDialog',
        },
      });

      modalDialogComponents.forEach((path) => {
        const attributes = path.node.attributes || [];

        let preferredHeightOnMobile: string | null = null;
        let preferredHeightFromTabletUp: string | null = null;
        let maxHeightFromTabletUp: string | null = null;

        // Iterate over attributes to find and remove the specific props
        path.node.attributes = attributes.filter((attr) => {
          if (j.JSXAttribute.check(attr)) {
            const attrName = attr.name.name;

            if (attrName === 'preferredHeightOnMobile' && attr.value && j.Literal.check(attr.value)) {
              preferredHeightOnMobile = attr.value.value as string;

              return false;
            }

            if (attrName === 'preferredHeightFromTabletUp' && attr.value && j.Literal.check(attr.value)) {
              preferredHeightFromTabletUp = attr.value.value as string;

              return false;
            }

            if (attrName === 'maxHeightFromTabletUp' && attr.value && j.Literal.check(attr.value)) {
              maxHeightFromTabletUp = attr.value.value as string;

              return false;
            }
          }

          return true;
        });

        // Create new height and maxHeight attributes
        if (preferredHeightOnMobile || preferredHeightFromTabletUp) {
          const heightObjectProperties = [];

          if (preferredHeightOnMobile) {
            heightObjectProperties.push(j.property('init', j.identifier('mobile'), j.literal(preferredHeightOnMobile)));
          }

          if (preferredHeightFromTabletUp) {
            heightObjectProperties.push(
              j.property('init', j.identifier('tablet'), j.literal(preferredHeightFromTabletUp)),
            );
          }

          const heightAttribute = j.jsxAttribute(
            j.jsxIdentifier('height'),
            j.jsxExpressionContainer(j.objectExpression(heightObjectProperties)),
          );

          path.node.attributes.push(heightAttribute);
        }

        if (maxHeightFromTabletUp) {
          const maxHeightObjectProperties = [
            j.property('init', j.identifier('tablet'), j.literal(maxHeightFromTabletUp)),
          ];

          const maxHeightAttribute = j.jsxAttribute(
            j.jsxIdentifier('maxHeight'),
            j.jsxExpressionContainer(j.objectExpression(maxHeightObjectProperties)),
          );

          path.node.attributes.push(maxHeightAttribute);
        }
      });
    }
  }

  return root.toSource({ quote: 'single' });
};

export default transform;
