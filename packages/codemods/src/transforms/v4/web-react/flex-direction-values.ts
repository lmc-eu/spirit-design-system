import { API, FileInfo } from 'jscodeshift';
import { removeParentheses } from '../../../helpers';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Define the mapping from old direction values to new ones
  const directionMap: { [key: string]: string } = {
    row: 'horizontal',
    column: 'vertical',
  };

  // Find all Flex components
  root
    .find(j.JSXOpeningElement, { name: { type: 'JSXIdentifier', name: 'Flex' } })
    .find(j.JSXAttribute, { name: { type: 'JSXIdentifier', name: 'direction' } })
    .forEach((attributePath) => {
      const attribute = attributePath.node;

      if (attribute.value) {
        // Handle string literal values
        if (attribute.value.type === 'StringLiteral') {
          const newValue = directionMap[attribute.value.value];
          if (newValue) {
            attribute.value = j.stringLiteral(newValue);
          }
        }

        // Handle object values
        else if (
          attribute.value.type === 'JSXExpressionContainer' &&
          attribute.value.expression.type === 'ObjectExpression'
        ) {
          const objectExpression = attribute.value.expression;

          objectExpression.properties.forEach((property) => {
            if (
              property.type === 'ObjectProperty' &&
              (property.key.type === 'Identifier' || property.key.type === 'Literal') &&
              property.value.type === 'StringLiteral'
            ) {
              const oldValue = property.value.value;

              // Update the value if it matches a key in directionMap
              if (oldValue in directionMap) {
                // Manually create a single-quoted Literal
                property.value = j.literal(directionMap[oldValue]);
                // We need single quotes in object values
                // @ts-expect-error extra is not defined on Literal
                property.value.extra = {
                  raw: `'${directionMap[oldValue]}'`,
                  rawValue: directionMap[oldValue],
                };
              }
            }
          });
        }
      }
    });

  // Convert the transformed code to source with double quotes for strings
  return removeParentheses(root.toSource({ quote: 'double' }));
};

export default transform;
