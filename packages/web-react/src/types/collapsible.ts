import { CSSProperties, MutableRefObject } from 'react';
import { CollapseProps, CollapseRenderProps } from './collapse';

export interface useCollapsibleProperties extends CollapseProps {
  contentReference: MutableRefObject<HTMLButtonElement | undefined>;
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
