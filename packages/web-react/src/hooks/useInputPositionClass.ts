import { type InputPositionType, type Responsive } from '../types';
import { generateStylePropsClassNames } from '../utils';

export function useInputPositionClass(
  componentClass: string,
  property: InputPositionType | Responsive<InputPositionType> | undefined,
) {
  if (!property) {
    return '';
  }

  return generateStylePropsClassNames(componentClass, property, 'inputPosition');
}
