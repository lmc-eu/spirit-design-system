import {
  type BackgroundColorsDictionaryType,
  type ChildrenProps,
  type SpaceToken,
  type StyleProps,
  type TextAlignmentType,
  type TransferProps,
} from './shared';

export interface FooterStyleProps {
  paddingTop?: SpaceToken;
  paddingBottom?: SpaceToken;
  backgroundColor?: BackgroundColorsDictionaryType;
  textAlignment?: TextAlignmentType;
}

export interface SpiritFooterProps extends FooterStyleProps, ChildrenProps, StyleProps, TransferProps {}
