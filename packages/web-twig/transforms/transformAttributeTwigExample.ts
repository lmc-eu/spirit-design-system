// Run with:
// jscodeshift --transform ./transforms/transformAttributeTwigExample.ts --extensions twig ./transforms/src

// Result:
// Will rename 'text' attribute to 'label' in all Button components

const transform = (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find Button components in the module
  const buttonComponents = root.find(j.JSXOpeningElement, {
    name: {
      type: 'JSXIdentifier',
      name: 'Button',
    },
  });

  // Rename 'buttonLabel' attribute to 'buttonText'
  buttonComponents
    .find(j.JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: 'buttonLabel',
      },
    })
    .forEach((attributePath) => {
      // Change attribute name to 'buttonText'
      attributePath.node.name.name = 'buttonText';
    });

  return root.toSource();
};

export default transform;
