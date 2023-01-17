const deprecatedDataAttribute = (
  componentName: string,
  deprecatedAttribute: string,
  newAttribute: string,
  element: HTMLElement,
): void => {
  if (element.dataset[deprecatedAttribute]) {
    // eslint-disable-next-line no-console
    console.warn(
      `Deprecation warning (${componentName}): "${deprecatedAttribute}" property will be replaced in next major version. Please use "${newAttribute}" instead. ♻️️`,
    );
  }
};

export { deprecatedDataAttribute };
