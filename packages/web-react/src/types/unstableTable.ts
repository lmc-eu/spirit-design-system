import { type SpiritDetailedHTMLProps, type StyleProps, type TransferProps } from './shared';

export interface TableProps extends StyleProps, TransferProps {
  isStriped?: boolean;
  isBordered?: boolean;
  isCompact?: boolean;
  isHoverable?: boolean;
  isResponsive?: boolean;
}

export interface SpiritTableProps extends TableProps, SpiritDetailedHTMLProps<HTMLTableElement> {}
