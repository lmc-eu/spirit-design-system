import {
  AlignmentXExtendedDictionaryType,
  BreakpointToken,
  ChildrenProps,
  SpaceToken,
  StyleProps,
  TransferProps,
} from './shared';

export type ActionGroupDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type ActionGroupDirectionType = ActionGroupDirection | { [key: string]: ActionGroupDirection };
export type ActionGroupAlignmentXType =
  | NonNullable<AlignmentXExtendedDictionaryType>
  | { [key: string]: NonNullable<AlignmentXExtendedDictionaryType> };

export interface ActionGroupCustomLayoutProps {
  alignmentX?: ActionGroupAlignmentXType;
  direction?: ActionGroupDirectionType;
  /** Custom spacing between items */
  spacing?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Custom horizontal spacing between items */
  spacingX?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Custom vertical spacing between items */
  spacingY?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
}

export interface ActionGroupProps extends ActionGroupCustomLayoutProps {}

export interface SpiritActionGroupProps extends ActionGroupProps, ChildrenProps, StyleProps, TransferProps {}
