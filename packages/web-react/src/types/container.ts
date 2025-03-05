import { ChildrenProps, SizeExtendedDictionaryType, StyleProps, TextAlignmentProps, TransferProps } from './shared';

export interface ContainerProps extends ChildrenProps, ContainerTextStyleProps, StyleProps, TransferProps {}

export type ContainerSize<C> = SizeExtendedDictionaryType | C;

export interface ContainerTextStyleProps {
  textAlignment?: TextAlignmentProps;
}

export interface SpiritContainerProps<C = void> extends ContainerProps {
  isFluid?: boolean;
  size?: ContainerSize<C>;
}
