import { IconBoxSize } from '../../types';
import { DEFAULT_BOX_SIZE } from './constants';

export const useIconBoxSize = (boxSize: IconBoxSize | undefined) =>
  typeof boxSize === 'object' ? (boxSize.mobile ?? DEFAULT_BOX_SIZE) : (boxSize ?? DEFAULT_BOX_SIZE);
