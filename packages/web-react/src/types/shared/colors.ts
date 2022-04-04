export type Color = 'primary' | 'secondary' | 'tertiary' | 'inverted' | 'success' | 'danger';

export interface ColorProps {
  /** The color of the component. */
  color?: Color;
}
