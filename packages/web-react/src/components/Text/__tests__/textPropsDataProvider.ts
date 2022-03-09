const textPropsDataProvider = [
  // [size, emphasis, expectedClassName]
  ['large', undefined, 'typography-body-large-text-regular'],
  ['medium', undefined, 'typography-body-medium-text-regular'],
  ['small', undefined, 'typography-body-small-text-regular'],
  ['xsmall', undefined, 'typography-body-xsmall-text-regular'],
  ['large', 'italic', 'typography-body-large-text-italic'],
  ['medium', 'italic', 'typography-body-medium-text-italic'],
  ['small', 'italic', 'typography-body-small-text-italic'],
  ['xsmall', 'italic', 'typography-body-xsmall-text-italic'],
  ['large', 'bold', 'typography-body-large-text-bold'],
  ['medium', 'bold', 'typography-body-medium-text-bold'],
  ['small', 'bold', 'typography-body-small-text-bold'],
  ['xsmall', 'bold', 'typography-body-xsmall-text-bold'],
];

export default textPropsDataProvider;
