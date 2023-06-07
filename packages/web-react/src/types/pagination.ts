import { ElementType } from 'react';
import {
  SpiritElementProps,
  SpiritLItemElementProps,
  SpiritPolymorphicElementPropsWithRef,
  SpiritUListElementProps,
} from './shared';
import { SpiritButtonProps } from './button';

export type PaginationLinkDirectionType = 'previous' | 'next';

export interface PaginationProps extends SpiritElementProps {
  listProps?: SpiritUListElementProps;
}

export interface PaginationItemProps extends SpiritLItemElementProps {}

export interface PaginationLinkBaseProps<E extends ElementType = 'a'> {
  elementType?: E;
}

export interface PaginationLinkProps<E extends ElementType = 'a'> extends PaginationLinkBaseProps<E> {
  isCurrent?: boolean;
  accessibilityLabel: string;
  pageNumber: number;
}

export type PaginationButtonLinkProps<E extends ElementType = 'a'> = SpiritButtonProps<E> & {
  direction: PaginationLinkDirectionType;
  accessibilityLabel: string;
};

export type PaginationLinkPreviousNextProps<E extends ElementType = 'a'> = SpiritButtonProps<E> & {
  accessibilityLabel?: string;
};

export interface SpiritPaginationProps extends PaginationProps {}

export interface SpiritPaginationItemProps extends PaginationItemProps {}

export type SpiritPaginationLinkProps<E extends ElementType = 'a'> = PaginationLinkProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, PaginationLinkProps<E>>;

export type SpiritPaginationButtonLinkProps<E extends ElementType = 'a'> = PaginationButtonLinkProps<E>;

export type SpiritPaginationLinkPreviousNextProps<E extends ElementType = 'a'> = PaginationLinkPreviousNextProps<E>;
