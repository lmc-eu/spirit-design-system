import { useCallback, useState } from 'react';
import { TabId } from '../../types';

export const useTab = (initialTabId: TabId) => {
  const [selectedTabId, setState] = useState<TabId>(initialTabId);

  // Define and memorize toggler function in case we pass down the component,
  const selectTab = useCallback((tabId: TabId) => {
    setState(tabId);
  }, []);

  return { selectedTabId, selectTab };
};
