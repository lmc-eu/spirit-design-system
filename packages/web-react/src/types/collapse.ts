import { ReactNode } from 'react';
import { ChildrenProps, ClickEvent, StyleProps, Booleanish } from './shared';

export type CollapseElementType = 'div' | 'article' | 'section' | 'main' | 'header' | 'footer';

export type CollapseResponsiveType = undefined | 'mobile' | 'tablet' | 'desktop';

export type CollapseRenderProps = {
  isOpen: boolean;
  onClick: (event: ClickEvent) => void;
  'aria-expanded': Booleanish;
  'aria-controls': string;
};

export interface BaseCollapseProps extends ChildrenProps, StyleProps {
  /** @deprecated The "id" property will be required instead of optional starting from the next major version. */
  id?: string;
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

export interface SpiritUncontrolledCollapseProps extends SpiritCollapseProps {
  hideOnCollapse?: boolean;
  renderTrigger?: (render: CollapseRenderProps) => ReactNode;
}
