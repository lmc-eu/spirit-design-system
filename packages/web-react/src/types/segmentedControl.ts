import { ChildrenProps, SpiritInputElementProps, StyleProps, TransferProps } from './shared';

export interface SegmentedControlProps extends ChildrenProps, StyleProps, TransferProps {}

export interface SegmentedControlItemProps extends StyleProps, SpiritInputElementProps, ChildrenProps, TransferProps {}

export interface SpiritSegmentedControlItemProps extends SegmentedControlItemProps {}

export interface SpiritSegmentedControlProps extends SegmentedControlProps {
  variant?: 'outline' | 'fill';
  isFluid?: boolean;
  label?: string;
  name: string;
}
