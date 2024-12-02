import { ReactNode } from 'react';
import { Booleanish, ChildrenProps, ClickEvent, StyleProps } from './shared';

export type CollapseElementType = 'div' | 'article' | 'section' | 'main' | 'header' | 'footer';

export type CollapseResponsiveType = undefined | 'mobile' | 'tablet' | 'desktop';

export type CollapseRenderProps = {
  isOpen: boolean;
  onClick: (event: ClickEvent) => void;
  'aria-expanded': Booleanish;
  'aria-controls': string;
};

export interface BaseCollapseProps extends ChildrenProps, StyleProps {
  id: string;
}

export interface CollapseProps extends BaseCollapseProps {
  collapsibleToBreakpoint?: CollapseResponsiveType;
  elementType?: CollapseElementType;
  isOpen: boolean;
}
export interface TransitionCollapseProps {
  transitionDuration?: number;
}

export interface SpiritCollapseProps extends CollapseProps, TransitionCollapseProps {}

export interface SpiritUncontrolledCollapseProps extends Omit<SpiritCollapseProps, 'isOpen'> {
  /** @deprecated "hideOnCollapse" property will be replaced in the next major version. Please use "isDisposable" instead. */
  hideOnCollapse?: boolean;
  isDisposable?: boolean;
  isOpen?: boolean;
  renderTrigger?: (render: CollapseRenderProps) => ReactNode;
}
