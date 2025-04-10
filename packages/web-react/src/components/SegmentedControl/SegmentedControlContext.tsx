'use client';

import { createContext, useContext } from 'react';

export type SegmentedControlContextProps = {
  hasMultipleSelection: boolean;
  name: string;
  selectedValue: string[];
  setSelectedValue: (value: string) => void;
};

const defaultContext: SegmentedControlContextProps = {
  hasMultipleSelection: false,
  name: '',
  selectedValue: [],
  setSelectedValue: () => {},
};

const SegmentedControlContext = createContext<SegmentedControlContextProps>(defaultContext);
const SegmentedControlProvider = SegmentedControlContext.Provider;
const useSegmentedControlContext = (): SegmentedControlContextProps => useContext(SegmentedControlContext);

export default SegmentedControlContext;
export { SegmentedControlProvider, useSegmentedControlContext };
