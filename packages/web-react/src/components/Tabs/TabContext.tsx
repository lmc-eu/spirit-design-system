import { createContext, useContext } from 'react';
import { TabId } from '../../types';

type TabsToggler = (tabId: TabId) => void;

type TabsContextType = {
  selectedTabId: TabId;
  selectTab: TabsToggler;
  onSelectionChange?: (tabId: TabId) => void;
};

const defaultContext: TabsContextType = {
  selectedTabId: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  selectTab: (tabId: TabId) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  onSelectionChange: (tabId: TabId) => {},
};

const TabsContext = createContext<TabsContextType>(defaultContext);
const TabsProvider = TabsContext.Provider;
const TabsConsumer = TabsContext.Consumer;
const useTabContext = (): TabsContextType => useContext(TabsContext);

export default TabsContext;
export { TabsConsumer, TabsProvider, useTabContext };
export type { TabsContextType, TabsToggler };
