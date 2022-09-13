import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, StyleProps } from '.';

export type TagColor = 'default' | 'informative' | 'success' | 'warning' | 'danger';

export type TagSize = 'xsmall' | 'small' | 'medium';

export type TagTheme = 'light' | 'dark';

export interface SpiritTagProps<T extends ElementType = 'span'> extends ChildrenProps, StyleProps {
  color?: TagColor;
  size?: TagSize;
  tag?: T | JSXElementConstructor<unknown>;
  theme?: TagTheme;
}
