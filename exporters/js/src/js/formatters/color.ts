import { normalizeColor } from '../normalizers/color';

type ColorShape = {
  a: number;
  hex: string;
};

export function formatColor(color: ColorShape): string {
  return normalizeColor(color.hex);
}
