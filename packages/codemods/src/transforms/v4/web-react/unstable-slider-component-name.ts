import { API, FileInfo, JSXIdentifier, JSXOpeningElement } from 'jscodeshift';
import { removeParentheses } from '../../../helpers';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find import statements for the specific module and UNSTABLE_Slider specifier
  const importStatements = root.find(j.ImportDeclaration, {
    source: {
      value: (value: string) => /^@lmc-eu\/spirit-web-react(\/.*)?$/.test(value),
    },
  });

  // UNSTABLE_Slider
  // Check if the module is imported
  if (importStatements.length > 0) {
    const componentSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: 'UNSTABLE_Slider',
      },
    });

    // Check if UNSTABLE_Slider specifier is present
    if (componentSpecifier.length > 0) {
      // Find opening tags for UNSTABLE_Slider components
      root
        .find<JSXOpeningElement>(j.JSXOpeningElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'UNSTABLE_Slider',
          },
        })
        .forEach((openingTagPath) => {
          // Change component name to 'Slider'
          if (openingTagPath.node.name.type === 'JSXIdentifier') {
            (openingTagPath.node.name as JSXIdentifier).name = 'Slider';
          }
        });

      // Change 'UNSTABLE_Slider' to 'Slider' in import statement
      componentSpecifier.forEach((path) => {
        j(path).replaceWith(j.importSpecifier(j.identifier('Slider'), j.identifier('Slider')));
      });
    }
  }

  // UNSTABLE_UncontrolledSlider
  // Check if the module is imported
  if (importStatements.length > 0) {
    const componentSpecifier = importStatements.find(j.ImportSpecifier, {
      imported: {
        type: 'Identifier',
        name: 'UNSTABLE_UncontrolledSlider',
      },
    });

    // Check if UNSTABLE_UncontrolledSlider specifier is present
    if (componentSpecifier.length > 0) {
      // Find opening tags for UNSTABLE_UncontrolledSlider components
      root
        .find<JSXOpeningElement>(j.JSXOpeningElement, {
          name: {
            type: 'JSXIdentifier',
            name: 'UNSTABLE_UncontrolledSlider',
          },
        })
        .forEach((openingTagPath) => {
          // Change component name to 'UncontrolledSlider'
          if (openingTagPath.node.name.type === 'JSXIdentifier') {
            (openingTagPath.node.name as JSXIdentifier).name = 'UncontrolledSlider';
          }
        });

      // Change 'UNSTABLE_UncontrolledSlider' to 'UncontrolledSlider' in import statement
      componentSpecifier.forEach((path) => {
        j(path).replaceWith(j.importSpecifier(j.identifier('UncontrolledSlider'), j.identifier('UncontrolledSlider')));
      });
    }
  }

  return removeParentheses(root.toSource());
};

export default transform;
