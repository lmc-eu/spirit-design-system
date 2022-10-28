import { useRef, Ref, CSSProperties, MutableRefObject } from 'react';
import { ClickEvent, CollapseResponsiveType, SpiritCollapseProps, Booleanish } from '../../types';
import { useResizeHeight } from './useResizeHeight';

const ATTRIBUTE_ARIA_EXPANDED = 'aria-expanded';
const ATTRIBUTE_ARIA_CONTROLS = 'aria-controls';
const ATTRIBUTE_DATA_BREAKPOINT = 'data-breakpoint';

export interface CollapseAriaPropsProps {
  id: string;
  isCollapsed: boolean;
  collapsibleToBreakpoint?: CollapseResponsiveType;
  toggleHandler: (event: ClickEvent) => void;
}

export interface CollapseAriaPropsReturn {
  /** wrapper returned props */
  wrapperProps: {
    style: CSSProperties;
    [ATTRIBUTE_DATA_BREAKPOINT]: SpiritCollapseProps['collapsibleToBreakpoint'];
  };
  /** content returned props */
  contentProps: {
    ref: Ref<unknown>;
  };
  /** trigger returned props */
  triggerProps: {
    [ATTRIBUTE_ARIA_EXPANDED]: Booleanish;
    [ATTRIBUTE_ARIA_CONTROLS]: string;
    onClick: (event: ClickEvent) => void;
  };
}

export const useCollapseAriaProps = (props: CollapseAriaPropsProps): CollapseAriaPropsReturn => {
  const { id, isCollapsed, collapsibleToBreakpoint, toggleHandler } = props;

  const contentElementRef: MutableRefObject<HTMLElement | null | undefined> = useRef();
  const { height } = useResizeHeight({ contentRef: contentElementRef });

  const wrapperProps = {
    style: {
      height: isCollapsed ? height : 0,
    },
    [ATTRIBUTE_DATA_BREAKPOINT]: collapsibleToBreakpoint,
  };
  const contentProps = {
    ref: contentElementRef,
  };
  const triggerProps = {
    [ATTRIBUTE_ARIA_EXPANDED]: isCollapsed,
    [ATTRIBUTE_ARIA_CONTROLS]: String(id),
    onClick: toggleHandler,
  };

  return {
    wrapperProps,
    contentProps,
    triggerProps,
  };
};
