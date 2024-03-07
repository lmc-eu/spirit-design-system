// Install jscodeshift if you haven't already
// npm install -g jscodeshift

// Run with:
// jscodeshift --transform ./transforms/transformValueTwigExample.ts --extensions twig ./transforms/src

// Result:
// Will replace *-left to *-start etc. Tooltip components imported from '@lmc-eu/spirit-web-react'

const transform = (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find Tooltip components in the module
  const tooltipComponents = root.find(j.JSXOpeningElement, {
    name: {
      type: 'JSXIdentifier',
      name: 'Tooltip',
    },
  });

  tooltipComponents
    .find(j.JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: 'placement',
      },
      value: {
        type: 'Literal',
        value: (val) =>
          val.includes('-left') || val.includes('-right') || val.includes('-top') || val.includes('-bottom'),
      },
    })
    .forEach((attributePath) => {
      // Update attribute value
      attributePath.node.value.value = attributePath.node.value.value
        .replace('-left', '-start')
        .replace('-right', '-end')
        .replace('-top', '-start')
        .replace('-bottom', '-end');
    });

  return root.toSource();
};

export default transform;
