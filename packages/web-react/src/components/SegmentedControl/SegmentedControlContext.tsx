'use client';

import { createContext, useContext } from 'react';
import { type SegmentedControlMultiselectProps } from '../../types/segmentedControl';

export type SegmentedControlContextProps = SegmentedControlMultiselectProps & {
  name: string;
  selectedValue: string | string[];
  setSelectedValue: (value: string | string[]) => void;
  onSelectionChange?: (value: string | string[]) => void;
};

const defaultContext: SegmentedControlContextProps = {
  isMultiselect: false,
  name: '',
  selectedValue: [],
  setSelectedValue: () => {},
  onSelectionChange: () => {},
};

const SegmentedControlContext = createContext<SegmentedControlContextProps>(defaultContext);
const SegmentedControlProvider = SegmentedControlContext.Provider;
const useSegmentedControlContext = (): SegmentedControlContextProps => useContext(SegmentedControlContext);

export default SegmentedControlContext;
export { SegmentedControlProvider, useSegmentedControlContext };
