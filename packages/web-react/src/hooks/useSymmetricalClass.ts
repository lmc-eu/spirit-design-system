type SymmetricalType = boolean | Record<string, boolean> | undefined;

const SYMMETRICAL_CLASS_SUFFIX = '--symmetrical';
const ASYMMETRICAL_CLASS_SUFFIX = '--asymmetrical';

export function useSymmetricalClass(componentClass: string, property: SymmetricalType) {
  if (typeof property === 'object' && property !== null) {
    return Object.entries(property)
      .map(([key, responsiveProperty]) => {
        const infix = key === 'mobile' ? '' : `--${key}`;

        return responsiveProperty
          ? `${componentClass}${infix}${SYMMETRICAL_CLASS_SUFFIX}`
          : `${componentClass}${infix}${ASYMMETRICAL_CLASS_SUFFIX}`;
      })
      .filter((className) => className !== '')
      .join(' ');
  }

  return property ? `${componentClass}${SYMMETRICAL_CLASS_SUFFIX}` : '';
}
