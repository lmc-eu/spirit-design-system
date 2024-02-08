import { MutableRefObject, createContext, useContext } from 'react';
import { Placements } from '../../constants';
import { ClickEvent, PlacementDictionaryType } from '../../types';
import { fullWidthModeKeys } from './useDropdownAriaProps';

type DropdownContextType = {
  dropdownRef: MutableRefObject<HTMLElement | null>;
  fullWidthMode?: keyof typeof fullWidthModeKeys;
  id: string;
  isOpen: boolean;
  onToggle: (event: ClickEvent) => void;
  placement?: PlacementDictionaryType;
  triggerRef: MutableRefObject<HTMLElement | undefined>;
};

const defaultContext: DropdownContextType = {
  dropdownRef: { current: null },
  fullWidthMode: fullWidthModeKeys.off,
  id: '',
  isOpen: false,
  onToggle: () => {},
  placement: Placements.BOTTOM_START,
  triggerRef: { current: undefined },
};

const DropdownContext = createContext<DropdownContextType>(defaultContext);
const DropdownProvider = DropdownContext.Provider;
const DropdownConsumer = DropdownContext.Consumer;
const useDropdownContext = (): DropdownContextType => useContext(DropdownContext);

export default DropdownContext;
export { DropdownConsumer, DropdownProvider, useDropdownContext };
export type { DropdownContextType };
