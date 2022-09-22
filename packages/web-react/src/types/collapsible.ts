import { CSSProperties, RefObject } from 'react';
import { CollapseProps, CollapseRenderProps } from './collapse';

export interface useCollapsibleProperties extends CollapseProps {
  contentReference: RefObject<any>;
  wrapperClassName: string;
  contentClassName: string;
}

export interface useCollapsibleReturn extends useCollapsibleProperties {
  renderProps: CollapseRenderProps;
  height: number;
  triggered: boolean;
  updatedWrapperProps: CSSProperties;
  updatedContentProps: CSSProperties;
}
