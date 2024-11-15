import { ElementType, HTMLProps } from 'react';
import {
  ChildrenProps,
  ClickEvents,
  LinkHrefProps,
  SpacingProp,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
  TransferProps,
} from './shared';

export type TabId = string | number;

export type TabListProps = ChildrenProps & TransferProps;

export interface TabItemProps extends ChildrenProps, TransferProps, ClickEvents {
  forTabPane: TabId;
}

export interface SpiritTabsProps extends SpacingProp {
  /** Identification of selected tab */
  selectedId?: TabId;
  /** Identification of tab */
  id?: TabId;
  /** Identification of affected pane */
  forTabPane?: TabId;
}

export interface TabsProps extends ChildrenProps, SpacingProp, TransferProps {
  selectedTab: TabId;
  toggle: TabsToggler;
  onSelectionChange?: (tabId: TabId) => void;
}

export type TabLinkItemProps = StyleProps & HTMLProps<HTMLLIElement>;

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
  LinkHrefProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, TabLinkProps<E>>;

export type TabsToggler = (id: TabId) => void;

export interface TabsContextType extends SpacingProp {
  selectedId: TabId;
  selectTab: TabsToggler;
  onSelectionChange?: (id: TabId) => void;
}

export interface TabPaneProps extends ChildrenProps, TransferProps {
  id: TabId;
}

export type TabContentProps = ChildrenProps & TransferProps;

export interface UncontrolledTabsProps extends ChildrenProps, SpacingProp, TransferProps {
  defaultSelectedTab: TabId;
  onSelectionChange?: (id: TabId) => void;
}
