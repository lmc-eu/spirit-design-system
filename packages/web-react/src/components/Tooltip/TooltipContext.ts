import { MiddlewareData, Placement } from '@floating-ui/react';
import { HTMLProps, MutableRefObject, createContext, useContext } from 'react';

type refType = ((node: HTMLElement | null) => void) & ((node: HTMLElement | null) => void);

type TooltipContextType = {
  anchorRef: refType;
  arrowRef: MutableRefObject<HTMLElement | null>;
  getFloatingProps: (userProps?: HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
  getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => Record<string, unknown>;
  id: string;
  isDismissible?: boolean;
  isOpen: boolean;
  middlewareData: MiddlewareData;
  onToggle: (isOpen: boolean) => void;
  placement?: Placement | undefined;
  sizeMaxWidth?: number;
  tooltipMaxWidth?: number;
  tooltipRef: refType;
  triggerRef: refType;
  x: number;
  y: number;
};

const defaultContext: TooltipContextType = {
  anchorRef: () => {},
  arrowRef: { current: null },
  getReferenceProps: () => ({
    id: '',
    ref: () => {},
  }),
  getFloatingProps: () => ({
    id: '',
    ref: () => {},
  }),
  id: '',
  isDismissible: false,
  isOpen: false,
  middlewareData: {},
  onToggle: () => {},
  placement: 'bottom',
  sizeMaxWidth: undefined,
  tooltipMaxWidth: undefined,
  tooltipRef: () => {},
  triggerRef: () => {},
  x: 0,
  y: 0,
};

const TooltipContext = createContext<TooltipContextType>(defaultContext);
const TooltipProvider = TooltipContext.Provider;
const TooltipConsumer = TooltipContext.Consumer;
const useTooltipContext = (): TooltipContextType => useContext(TooltipContext);

export default TooltipContext;
export { TooltipConsumer, TooltipProvider, useTooltipContext };
export type { TooltipContextType };
