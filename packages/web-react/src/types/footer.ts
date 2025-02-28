import {
  BackgroundColorsDictionaryType,
  ChildrenProps,
  SpaceToken,
  StyleProps,
  TextAlignmentProps,
  TransferProps,
} from './shared';

export interface FooterStyleProps {
  paddingTop?: SpaceToken;
  paddingBottom?: SpaceToken;
  backgroundColor?: BackgroundColorsDictionaryType;
  textAlignment?: TextAlignmentProps;
}

export interface SpiritFooterProps extends FooterStyleProps, ChildrenProps, StyleProps, TransferProps {}
