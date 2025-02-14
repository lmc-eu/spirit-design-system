import { ChildrenProps, SizeExtendedDictionaryType, StyleProps, TransferProps } from './shared';

export interface ContainerProps extends ChildrenProps, StyleProps, TransferProps {}

export type ContainerSize<C> = SizeExtendedDictionaryType | C;

export interface SpiritContainerProps<C = void> extends ContainerProps {
  isFluid?: boolean;
  size?: ContainerSize<C>;
}
