import { useEffect, useRef, useState, Ref, CSSProperties, MutableRefObject } from 'react';
import { ClickEvent, CollapseResponsiveType, SpiritCollapseProps } from '../../types';

const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';
const NAME_DATA_BREAKPOINT = 'data-breakpoint';

export interface CollapseAriaPropsProps {
  id: string;
  isCollapsed: boolean;
  collapsibleToBreakpoint: CollapseResponsiveType;
  toggleHandler: (event: ClickEvent) => void;
}

export interface CollapseAriaPropsReturn {
  /** wrapper returned props */
  wrapperProps: {
    style: CSSProperties;
    [NAME_DATA_BREAKPOINT]: SpiritCollapseProps['collapsibleToBreakpoint'];
  };
  /** content returned props */
  contentProps: {
    ref: Ref<unknown>;
  };
  /** trigger returned props */
  triggerProps: {
    [NAME_ARIA_EXPANDED]: string;
    [NAME_ARIA_CONTROLS]: string;
    onClick: (event: ClickEvent) => void;
  };
}

export const useCollapseAriaProps = (props: CollapseAriaPropsProps): CollapseAriaPropsReturn => {
  const { id, isCollapsed, collapsibleToBreakpoint, toggleHandler } = props;

  const [height, setHeight] = useState<string | number>('0px');
  const contentElementRef: MutableRefObject<HTMLElement | null | undefined> = useRef();

  const wrapperProps = {
    style: {
      height: isCollapsed ? height : 0,
    },
    [NAME_DATA_BREAKPOINT]: collapsibleToBreakpoint,
  };
  const contentProps = {
    ref: contentElementRef,
  };
  const triggerProps = {
    [NAME_ARIA_EXPANDED]: String(isCollapsed),
    [NAME_ARIA_CONTROLS]: String(id),
    onClick: toggleHandler,
  };

  const adjustHeight = () => {
    const currentHeight = contentElementRef?.current?.clientHeight || contentElementRef?.current?.offsetHeight;
    setHeight(`${currentHeight}px`);
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener('resize', adjustHeight);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    wrapperProps,
    contentProps,
    triggerProps,
  };
};
