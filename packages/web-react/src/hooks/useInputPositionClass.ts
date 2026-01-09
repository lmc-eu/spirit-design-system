import { type InputPosition, type Responsive } from '../types';
import { generateStylePropsClassNames } from '../utils';

export function useInputPositionClass(
  componentClass: string,
  property: InputPosition | Responsive<InputPosition> | undefined,
) {
  if (!property) {
    return '';
  }

  return generateStylePropsClassNames(componentClass, property, 'inputPosition');
}
