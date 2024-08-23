type WrappingType = boolean | Record<string, boolean> | undefined;

const WRAP_CLASS = '--wrap';
const NO_WRAP_CLASS = '--noWrap';

export function useWrapClass(componentClass: string, property: WrappingType) {
  if (typeof property === 'object' && property !== null) {
    return Object.entries(property)
      .map(([key, responsiveProperty]) => {
        const infix = key === 'mobile' ? '' : `--${key}`;

        return `${componentClass}${infix}${responsiveProperty ? WRAP_CLASS : NO_WRAP_CLASS}`;
      })
      .join(' ');
  }

  return `${componentClass}${property ? WRAP_CLASS : NO_WRAP_CLASS}`;
}
