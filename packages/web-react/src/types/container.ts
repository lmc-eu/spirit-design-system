import { ChildrenProps, StyleProps, TransferProps } from './shared';

export interface ContainerProps extends ChildrenProps, StyleProps, TransferProps {}

export interface SpiritContainerProps extends ContainerProps {
  isFluid?: boolean;
}
