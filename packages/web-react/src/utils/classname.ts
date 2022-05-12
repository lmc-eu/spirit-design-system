export const applyClassNamePrefix =
  (prefix: string | null | undefined) =>
  (className: string): string =>
    prefix != null && prefix !== '' ? `${prefix}-${className}` : className;
export const applyColor =
  <Color>(color: Color) =>
  (className: string): string =>
    `${className}--${color}`;
export const applySize =
  <Size>(size: Size) =>
  (className: string): string =>
    `${className}--${size}`;
export const applyTheme =
  <Theme>(theme: Theme) =>
  (className: string): string =>
    `${className}--${theme}`;
