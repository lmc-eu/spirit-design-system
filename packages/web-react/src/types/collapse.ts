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

export interface CollapseProps extends ChildrenProps, StyleProps {
  id?: string;
}

export interface SpiritCollapseProps extends CollapseProps {
  collapsibleToBreakpoint?: CollapseResponsiveType;
  elementType?: CollapseElementType;
  isOpen: boolean;
}

export interface SpiritUncontrolledCollapseProps extends SpiritCollapseProps {
  hideOnCollapse?: boolean;
  renderTrigger?: (render: CollapseRenderProps) => ReactNode;
}
