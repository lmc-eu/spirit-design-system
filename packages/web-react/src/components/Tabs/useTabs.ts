import { useCallback, useState } from 'react';
import { TabId } from '../../types';

export const useTab = (initialId: TabId) => {
  const [selectedId, setState] = useState<TabId>(initialId);

  // Define and memorize toggler function in case we pass down the component,
  const selectTab = useCallback((id: TabId) => {
    setState(id);
  }, []);

  return { selectedId, selectTab };
};
