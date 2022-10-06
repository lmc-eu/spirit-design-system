import { ReactNode } from 'react';
import { ChildrenProps, ClickEvent, StyleProps } from './shared';

export type CollapseElementType = 'div' | 'article' | 'section' | 'main' | 'header' | 'footer' | 'span';

export type CollapseResponsiveType = undefined | 'mobile' | 'tablet' | 'desktop';

export type CollapseTriggerProps = {
  onClick: (event: ClickEvent) => void;
  className?: string | undefined;
  'aria-expanded': string | boolean | undefined;
  'aria-controls': string;
};

export type CollapseRenderProps = {
  collapsed: boolean;
  trigger: CollapseTriggerProps;
};

export interface SpiritCollapseProps extends ChildrenProps, StyleProps {
  id?: string;
  isCollapsed?: boolean;
  hideOnCollapse?: boolean;
  collapsibleToBreakpoint?: CollapseResponsiveType;
  renderTrigger?: (render: CollapseRenderProps) => ReactNode;
  elementType?: CollapseElementType;
  contentElementType?: CollapseElementType;
}
