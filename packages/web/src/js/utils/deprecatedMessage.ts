const checkDeprecatedDataAttribute = (
  componentName: string,
  deprecatedPropName: string,
  newPropName: string,
  element: HTMLElement,
): void => {
  if (element.dataset[deprecatedPropName]) {
    console.warn(
      `Deprecation warning (${componentName}): "${deprecatedPropName}" property will be replaced in next major version. Please use "${newPropName}" instead. ♻️️`,
    );
  }
};

export { checkDeprecatedDataAttribute };
