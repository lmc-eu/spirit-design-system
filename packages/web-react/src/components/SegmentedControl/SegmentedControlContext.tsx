'use client';

import { createContext, useContext } from 'react';

export type SegmentedControlContextProps = {
  hasMultipleSelection?: boolean;
  name: string;
  selectedValue?: string[];
  setSelectedValue?: (value: string) => void;
};

const defaultContext: SegmentedControlContextProps = {
  name: '',
  selectedValue: [],
};

const SegmentedControlContext = createContext<SegmentedControlContextProps>(defaultContext);
const SegmentedControlProvider = SegmentedControlContext.Provider;
const SegmentedControlConsumer = SegmentedControlContext.Consumer;
const useSegmentedControlContext = (): SegmentedControlContextProps => useContext(SegmentedControlContext);

export default SegmentedControlContext;
export { SegmentedControlProvider, SegmentedControlConsumer, useSegmentedControlContext };
