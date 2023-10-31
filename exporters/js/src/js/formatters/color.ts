import { normalizeColor } from '../normalizers/color';

type ColorShape = {
  a: number;
  hex: string;
};

export function formatColor(color: ColorShape): string {
  if (color.a < 255) {
    return `#${color.hex}`;
  }

  return `#${normalizeColor(color.hex.substring(0, 6))}`;
}
