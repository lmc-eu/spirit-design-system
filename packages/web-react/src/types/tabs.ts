export type TabId = string | number;

export interface SpiritTabsProps {
  /** Identification of selected tab */
  selectedTabId?: TabId;
  /** Identification of tab */
  tabId?: TabId;
  /** Identification of affected pane */
  forTab?: TabId;
}
