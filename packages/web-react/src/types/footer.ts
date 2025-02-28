import {
  BackgroundColorsDictionaryType,
  ChildrenProps,
  SpaceToken,
  StyleProps,
  TextAlignmentType,
  TransferProps,
} from './shared';

export interface FooterStyleProps {
  paddingTop?: SpaceToken;
  paddingBottom?: SpaceToken;
  backgroundColor?: BackgroundColorsDictionaryType;
  textAlignment?: TextAlignmentType;
}

export interface SpiritFooterProps extends FooterStyleProps, ChildrenProps, StyleProps, TransferProps {}
