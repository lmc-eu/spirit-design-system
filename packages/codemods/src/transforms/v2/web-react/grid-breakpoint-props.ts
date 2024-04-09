import { API, FileInfo, JSXExpressionContainer } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root
    .find(j.JSXOpeningElement, {
      name: {
        type: 'JSXIdentifier',
        name: 'Grid',
      },
    })
    .forEach((path) => {
      let colsValue: JSXExpressionContainer['expression'] | null = null;
      let tabletValue: JSXExpressionContainer['expression'] | null = null;
      let desktopValue: JSXExpressionContainer['expression'] | null = null;

      if (path.node && path.node.attributes) {
        // Filtering attributes
        path.node.attributes = path.node.attributes.filter((attr) => {
          if (attr.type === 'JSXAttribute' && attr.value?.type === 'JSXExpressionContainer') {
            const {
              name,
              value: { expression },
            } = attr;
            if (name.name === 'cols') {
              colsValue = expression;

              return true; // keep cols
            }
            if (name.name === 'tablet') {
              tabletValue = expression;
            } else if (name.name === 'desktop') {
              desktopValue = expression;
            }

            return name.name !== 'tablet' && name.name !== 'desktop'; // remove tablet and desktop
          }

          return true;
        });

        if (tabletValue || desktopValue) {
          const colsObjectProperties = [];
          if (colsValue) colsObjectProperties.push(j.objectProperty(j.identifier('mobile'), colsValue));
          if (tabletValue) colsObjectProperties.push(j.objectProperty(j.identifier('tablet'), tabletValue));
          if (desktopValue) colsObjectProperties.push(j.objectProperty(j.identifier('desktop'), desktopValue));

          // Ensure colsAttribute exists or create it
          let colsAttribute = path.node.attributes.find(
            (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'cols',
          );
          if (!colsAttribute) {
            colsAttribute = j.jsxAttribute(j.jsxIdentifier('cols'), null);
            path.node.attributes.push(colsAttribute);
          }

          if (colsAttribute && colsAttribute.type === 'JSXAttribute') {
            colsAttribute.value = j.jsxExpressionContainer(j.objectExpression(colsObjectProperties));
          }
        }
      }
    });

  return root.toSource({ quote: 'single' });
};

export default transform;
