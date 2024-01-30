// Install jscodeshift if you haven't already
// npm install -g jscodeshift

// Run with:
// jscodeshift --transform ./transforms/transformComponentNameTwigExample.ts --extensions twig ./transforms/src

// Result:
// Will change import from Tooltip to TooltipModern in all files where @lmc-eu/spirit-web-react

const transform = (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find opening tags for Tooltip components
  root
    .find(j.JSXOpeningElement, {
      name: {
        type: 'JSXIdentifier',
        name: 'Tooltip',
      },
    })
    .forEach((tooltipPath) => {
      // Change component name to 'TooltipModern'
      tooltipPath.node.name.name = 'TooltipModern';
    });

  // Find closing tags for Tooltip components
  root
    .find(j.JSXClosingElement, {
      name: {
        type: 'JSXIdentifier',
        name: 'Tooltip',
      },
    })
    .forEach((closingTagPath) => {
      // Change closing tag name to 'TooltipModern'
      closingTagPath.node.name.name = 'TooltipModern';
    });

  return root.toSource();
};

export default transform;
