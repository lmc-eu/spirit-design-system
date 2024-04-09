import { API, FileInfo } from 'jscodeshift';

const transform = (fileInfo: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Define the mapping from old placement values to new ones
  const placementMap = {
    'top-left': 'top-start',
    'top-right': 'top-end',
    'right-top': 'right-start',
    'right-bottom': 'right-end',
    'bottom-left': 'bottom-start',
    'bottom-right': 'bottom-end',
    'left-top': 'left-start',
    'left-bottom': 'left-end',
  };

  root
    .find(j.JSXOpeningElement, {
      name: {
        type: 'JSXIdentifier',
        name: (name: string) => name === 'Tooltip' || name === 'Dropdown',
      },
    })
    .forEach((path) => {
      if (path.node && path.node.attributes) {
        path.node.attributes.forEach((attr) => {
          if (
            attr.type === 'JSXAttribute' &&
            attr.name.name === 'placement' &&
            attr.value &&
            attr.value.type === 'StringLiteral'
          ) {
            // Check if the current placement value is in the map and update it
            const newValue = placementMap[attr.value.value as keyof typeof placementMap];
            if (newValue) {
              attr.value.value = newValue;
            }
          }
        });
      }
    });

  return root.toSource();
};

export default transform;
