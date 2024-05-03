import { ElementType } from 'react';
import { ChildrenProps, SpiritPolymorphicElementPropsWithRef, StyleProps, TransferProps } from './shared';
import { TabsToggler } from '../components';

export type TabId = string | number;

export interface SpiritTabsProps {
  /** Identification of selected tab */
  selectedTabId?: TabId;
  /** Identification of tab */
  tabId?: TabId;
  /** Identification of affected pane */
  forTab?: TabId;
}

export interface TabsProps extends ChildrenProps, TransferProps {
  selectedTab: TabId;
  toggle: TabsToggler;
  onSelectionChange?: (tabId: TabId) => void;
}

export type TabLinkItemProps = StyleProps & React.HTMLProps<HTMLLIElement>;

export interface TabLinkBaseProps extends ChildrenProps, StyleProps, TransferProps {
  itemProps?: TabLinkItemProps;
}

export type TabLinkProps<E extends ElementType = 'a'> = {
  /**
   * The HTML element or React element used to render the Link, e.g. 'a'.
   *
   * @default 'a'
   */
  elementType?: E;
} & TabLinkBaseProps;

export type SpiritTabLinkProps<E extends ElementType = 'a'> = TabLinkProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, TabLinkProps<E>>;
