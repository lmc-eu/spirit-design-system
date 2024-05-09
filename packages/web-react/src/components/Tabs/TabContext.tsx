import { createContext, useContext } from 'react';
import { TabId, TabsContextType, TabsToggler } from '../../types';

const defaultContext: TabsContextType = {
  selectedId: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  selectTab: (id: TabId) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  onSelectionChange: (id: TabId) => {},
};

const TabsContext = createContext<TabsContextType>(defaultContext);
const TabsProvider = TabsContext.Provider;
const TabsConsumer = TabsContext.Consumer;
const useTabContext = (): TabsContextType => useContext(TabsContext);

export default TabsContext;
export { TabsConsumer, TabsProvider, useTabContext };
export type { TabsContextType, TabsToggler };
