export type SpiritElement =
  | Node
  | Element
  | HTMLElement
  | HTMLOrSVGElement
  | ElementCSSInlineStyle
  // @ts-expect-error TS2304: Cannot find name 'EventHandlerElement'.
  | EventHandlerElement
  | null;
