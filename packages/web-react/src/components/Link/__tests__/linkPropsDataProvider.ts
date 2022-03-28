const linkPropsDataProvider = [
  // color, isUnderlined, isDisabled, expectedClassName
  ['primary', false, false, 'link-primary'],
  ['secondary', false, false, 'link-secondary'],
  ['inverted', false, false, 'link-inverted'],
  ['primary', true, false, 'link-primary link-underlined'],
  ['secondary', true, false, 'link-secondary link-underlined'],
  ['inverted', true, false, 'link-inverted link-underlined'],
  ['primary', true, true, 'link-primary link-disabled link-underlined'],
  ['secondary', true, true, 'link-secondary link-disabled link-underlined'],
  ['inverted', true, true, 'link-inverted link-disabled link-underlined'],
];

export default linkPropsDataProvider;
