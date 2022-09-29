import { CSSProperties, MutableRefObject, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { ClickEvent, CollapseResponsiveType, CollapseContentProps } from '../../types';

export interface useCollapseStyleProps {
  id?: string;
  collapsed?: boolean;
  responsive?: CollapseResponsiveType;
  contentHeight?: string;
  onToggle?: (event: ClickEvent) => void;
  contentRef?: MutableRefObject<HTMLButtonElement | undefined>;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
  contentProps?: CollapseContentProps;
}

export const useCollapseStyle = (props: useCollapseStyleProps) => {
  const {
    id,
    collapsed,
    responsive,
    contentHeight,
    onToggle,
    contentRef,
    wrapperClassName,
    wrapperStyle,
    contentProps,
  } = props;

  const NAME_ARIA_EXPANDED = 'aria-expanded';
  const NAME_ARIA_CONTROLS = 'aria-controls';
  const NAME_DATA_BREAKPOINT = 'data-breakpoint';

  const wrapperClass = useClassNamePrefix('Collapse');
  const contentClass = useClassNamePrefix('Collapse__content');
  const collapsedClass = collapsed ? 'is-collapsed' : '';
  const expandedClass = collapsed ? 'is-expanded' : '';

  const [height, setHeight] = useState(contentHeight);

  const adjustHeight = () => {
    setHeight(`${contentRef?.current?.clientHeight}px`);
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener('resize', adjustHeight);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    triggerProps: {
      className: classNames(collapsedClass),
      UNSAFE_className: classNames(collapsedClass),
      [NAME_ARIA_EXPANDED]: String(collapsed),
      [NAME_ARIA_CONTROLS]: String(id),
      onClick: onToggle as (event: ClickEvent) => void,
    },
    wrapperProps: {
      id,
      className: classNames(wrapperClass, expandedClass, wrapperClassName),
      style: {
        height: collapsed ? height : 0,
        ...wrapperStyle,
      },
      [NAME_DATA_BREAKPOINT]: responsive,
    },
    contentProps: {
      className: classNames(contentClass, contentProps?.UNSAFE_className),
      style: contentProps?.UNSAFE_style,
      ref: contentRef,
    },
  };
};
