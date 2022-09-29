import { ReactNode } from 'react';
import { ChildrenProps, ClickEvent, StyleProps } from './shared';

export type CollapseElementType = 'div' | 'article' | 'section' | 'main' | 'header' | 'footer' | 'span';

export type CollapseResponsiveType = 'mobile' | 'tablet' | 'desktop';

export type CollapseBreakpointsType = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
};

export type CollapseTriggerProps = {
  onClick: (event: ClickEvent) => void;
  className: string;
  UNSAFE_className: string;
  'aria-expanded': string | boolean | undefined;
  'aria-controls': string;
};

export type CollapseRenderProps = {
  collapsed: boolean;
  trigger: CollapseTriggerProps;
};

export interface CollapseContentProps extends StyleProps {
  elementType?: CollapseElementType;
}

export interface CollapseProps extends ChildrenProps, StyleProps {
  id?: string;
  collapsed?: boolean;
  renderTrigger?: (render: CollapseRenderProps) => ReactNode;
  elementType?: CollapseElementType;
  contentProps?: CollapseContentProps;
  responsive?: CollapseResponsiveType;
  hideOnCollapse?: boolean;
  breakpoints?: CollapseBreakpointsType;
}
