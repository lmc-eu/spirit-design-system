import { BackgroundColorsDictionaryType, ChildrenProps, SpaceToken, StyleProps, TransferProps } from './shared';

export interface FooterStyleProps {
  paddingTop?: SpaceToken;
  paddingBottom?: SpaceToken;
  backgroundColor?: BackgroundColorsDictionaryType;
}

export interface SpiritFooterProps extends FooterStyleProps, ChildrenProps, StyleProps, TransferProps {}
