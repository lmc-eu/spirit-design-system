import { ElementType } from 'react';
import { SpiritButtonProps } from './button';
import {
  ChildrenProps,
  SpiritElementProps,
  SpiritLItemElementProps,
  SpiritPolymorphicElementPropsWithRef,
  SpiritUListElementProps,
} from './shared';

export type PaginationLinkDirectionType = 'previous' | 'next';

export interface PaginationProps extends SpiritElementProps {
  listProps?: SpiritUListElementProps;
}

export interface PaginationItemProps extends SpiritLItemElementProps {}

export interface AriaPaginationProps {
  accessibilityLabel?: string;
}

export interface PaginationLinkBaseProps<E extends ElementType = 'a'> {
  elementType?: E;
}

export interface PaginationLinkProps<E extends ElementType = 'a'>
  extends PaginationLinkBaseProps<E>,
    AriaPaginationProps {
  isCurrent?: boolean;
  pageNumber: number;
}

export type PaginationButtonLinkProps<E extends ElementType = 'a'> = SpiritButtonProps<E> &
  AriaPaginationProps & {
    direction: PaginationLinkDirectionType;
  };

export type PaginationLinkPreviousNextProps<E extends ElementType = 'a'> = SpiritButtonProps<E> & AriaPaginationProps;

export interface SpiritPaginationProps extends PaginationProps {}

export interface SpiritPaginationItemProps extends PaginationItemProps {}

export type SpiritPaginationLinkProps<E extends ElementType = 'a'> = PaginationLinkProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, PaginationLinkProps<E>>;

export type SpiritPaginationButtonLinkProps<E extends ElementType = 'a'> = PaginationButtonLinkProps<E>;

export type SpiritPaginationLinkPreviousNextProps<E extends ElementType = 'a'> = PaginationLinkPreviousNextProps<E>;

export interface UncontrolledPaginationProps {
  accessibilityLabelNext?: string;
  accessibilityLabelPrevious?: string;
  defaultPage?: number;
  visiblePages?: number;
  onChange?: (pageNumber: number) => void;
  totalPages: number;
}

export interface SpiritUncontrolledPaginationProps
  extends AriaPaginationProps,
    UncontrolledPaginationProps,
    ChildrenProps {}

export interface UsePaginationProps extends UncontrolledPaginationProps {
  defaultPage: number;
  visiblePages: number;
}
