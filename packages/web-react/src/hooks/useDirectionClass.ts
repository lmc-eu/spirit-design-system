import { FlexDirectionType } from '../types';
import { generateStylePropsClassNames } from '../utils';

export function useDirectionClass(componentClass: string, property: FlexDirectionType) {
  return generateStylePropsClassNames(componentClass, property);
}
