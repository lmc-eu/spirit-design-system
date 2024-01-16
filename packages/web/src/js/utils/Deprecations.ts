import { warning } from '../common/utilities';

const deprecatedDataAttribute = (
  componentName: string,
  deprecatedAttribute: string,
  newAttribute: string,
  element: HTMLElement,
): void => {
  warning(
    !element.dataset[deprecatedAttribute],
    `Deprecation warning (${componentName}): "${deprecatedAttribute}" property will be replaced in the next major version. Please use "${newAttribute}" instead. ♻️️`,
  );
};

export { deprecatedDataAttribute };
