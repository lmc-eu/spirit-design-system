import { ChildrenProps, FillVariantDictionaryType, SpiritInputElementProps, StyleProps, TransferProps } from './shared';

export interface SegmentedControlProps extends ChildrenProps, StyleProps, TransferProps {}

export interface SegmentedControlItemProps extends StyleProps, SpiritInputElementProps, ChildrenProps, TransferProps {}

export interface SpiritSegmentedControlItemProps extends SegmentedControlItemProps {}

export interface SpiritSegmentedControlProps extends SegmentedControlProps {
  hasMultipleSelection?: boolean;
  isFluid?: boolean;
  label?: string;
  name: string;
  variant?: FillVariantDictionaryType;
}
