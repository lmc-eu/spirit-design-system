import { ElementType } from 'react';
import { ContainerProps } from './container';
import {
  BackgroundColorsDictionaryType,
  BreakpointToken,
  ChildrenProps,
  SizeExtendedDictionaryType,
  SpaceToken,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
} from './shared';

export interface SectionBaseProps<E extends ElementType> extends ChildrenProps, StyleProps {
  /**
   * The HTML element or React element used to render the section, e.g. 'div' or 'section'.
   *
   * @default 'section'
   */
  elementType?: E;
}

export interface SectionProps<E extends ElementType, S = void> extends SectionBaseProps<E> {
  /** Container props to pass to the container component. */
  containerProps?: ContainerProps;
  /** Whether the section should have a container. */
  hasContainer?: boolean;
  /** The background color of the section. */
  backgroundColor?: BackgroundColorsDictionaryType;
  /** Vertical padding of the section. */
  paddingY?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Padding top of the section. */
  paddingTop?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Padding bottom of the section. */
  paddingBottom?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Size of the section. */
  size?: SizeExtendedDictionaryType | S;
}

export type SpiritSectionProps<E extends ElementType = 'section', S = void> = SectionProps<E, S> &
  SpiritPolymorphicElementPropsWithRef<E, SectionProps<E, S>>;
