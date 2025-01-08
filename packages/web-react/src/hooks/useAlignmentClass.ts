import { FlexAlignmentXType, FlexAlignmentYType } from '../types';
import { generateStylePropsClassNames } from '../utils';

export type AlignmentPropertyType = FlexAlignmentXType | FlexAlignmentYType;

const DEFAULT_MOBILE_ALIGNMENT = 'stretch';

export function useAlignmentClass(componentClass: string, property: AlignmentPropertyType, type?: string) {
  const responsiveProperty =
    property && typeof property === 'object' ? { mobile: DEFAULT_MOBILE_ALIGNMENT, ...property } : property;

  return generateStylePropsClassNames(componentClass, responsiveProperty as AlignmentPropertyType, type);
}
