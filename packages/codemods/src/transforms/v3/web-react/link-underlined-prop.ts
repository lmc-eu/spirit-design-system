import {
  API,
  FileInfo,
  Collection,
  JSCodeshift,
  JSXElement,
  JSXAttribute,
  ImportDeclaration,
  JSXOpeningElement,
} from 'jscodeshift';
import { removeParentheses } from '../../../helpers';

const transform = (fileInfo: FileInfo, api: API): string => {
  const j: JSCodeshift = api.jscodeshift;
  const root: Collection<JSXElement> = j(fileInfo.source);

  // Find import statements for the specific module
  const importStatements: Collection<ImportDeclaration> = root.find(j.ImportDeclaration, {
    source: {
      value: (value: string): boolean => /^@lmc-eu\/spirit-web-react(\/.*)?$/.test(value),
    },
  });

  // Check if the module is imported
  if (importStatements.length > 0) {
    // Find Link components in the code
    const linkComponents: Collection<JSXOpeningElement> = root.find(j.JSXOpeningElement, {
      name: {
        type: 'JSXIdentifier',
        name: 'Link',
      },
    });

    linkComponents.forEach((path) => {
      if (path.node && path.node.attributes) {
        // Find the isUnderlined attribute
        path.node.attributes.forEach((attr, index) => {
          if (attr.type === 'JSXAttribute' && (attr as JSXAttribute).name.name === 'isUnderlined') {
            const jsxAttr = attr as JSXAttribute;
            // Check if the attribute value is true
            if (
              jsxAttr.value === null ||
              (jsxAttr.value?.type === 'JSXExpressionContainer' &&
                jsxAttr.value.expression.type === 'BooleanLiteral' &&
                jsxAttr.value.expression.value === true) ||
              (jsxAttr.value?.type === 'Literal' && jsxAttr.value.value === true)
            ) {
              // Change isUnderlined to underline="always"
              jsxAttr.name.name = 'underlined';
              jsxAttr.value = j.literal('always');
            } else if (
              jsxAttr.value?.type === 'JSXExpressionContainer' &&
              jsxAttr.value.expression.type === 'BooleanLiteral' &&
              jsxAttr.value.expression.value === false
            ) {
              // If isUnderlined is set to false, remove the attribute
              path.node.attributes?.splice(index, 1);
            }
          }
        });
      }
    });
  }

  return removeParentheses(root.toSource());
};

export default transform;
