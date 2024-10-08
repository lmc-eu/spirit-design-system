const linkPropsDataProvider = [
  // color, isUnderlined, isDisabled, expectedClassName
  ['primary', false, false, 'link-primary'],
  ['secondary', false, false, 'link-secondary'],
  ['tertiary', false, false, 'link-tertiary'],
  ['primary', true, false, 'link-primary link-underlined'],
  ['secondary', true, false, 'link-secondary link-underlined'],
  ['tertiary', true, false, 'link-tertiary link-underlined'],
  ['primary', true, true, 'link-primary link-disabled link-underlined'],
  ['secondary', true, true, 'link-secondary link-disabled link-underlined'],
  ['tertiary', true, true, 'link-tertiary link-disabled link-underlined'],
];

export default linkPropsDataProvider;
