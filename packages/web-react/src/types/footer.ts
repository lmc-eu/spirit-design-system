import {
  type BackgroundColorsDictionaryType,
  type ChildrenProps,
  type SpaceToken,
  type StyleProps,
  type TextAlignmentType,
} from './shared';

export interface FooterProps {
  paddingTop?: SpaceToken;
  paddingBottom?: SpaceToken;
  backgroundColor?: BackgroundColorsDictionaryType;
  textAlignment?: TextAlignmentType;
}

export interface SpiritFooterProps extends FooterProps, ChildrenProps, StyleProps {}
