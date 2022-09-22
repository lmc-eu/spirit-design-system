import { useEffect, useState } from 'react';
import { ClickEvent, useCollapsibleProperties, useCollapsibleReturn } from '../types';

export const useCollapsible = (props: useCollapsibleProperties) => {
  const {
    id,
    collapsed,
    contentReference,
    responsive,
    UNSAFE_style,
    UNSAFE_className,
    contentProps,
    wrapperClassName,
    contentClassName,
    hideOnCollapse,
    ...rest
  } = props;

  const INSTANCE_ID = id || `collapsible_${(Math.random() + 1).toString(36).substring(7)}`;
  const BREAKPOINT_MOBILE = 0;
  const BREAKPOINT_TABLET = 768;
  const BREAKPOINT_DESKTOP = 1280;
  const NAME_ARIA_EXPANDED = 'aria-expanded';
  const NAME_ARIA_CONTROLS = 'aria-controls';
  const CLASSNAME_EXPANDED = 'is-expanded';
  const CLASSNAME_COLLAPSED = 'is-collapsed';

  const [isCollapsed, setCollapsed] = useState(collapsed);
  const [height, setHeight] = useState<number | 'initial'>(0);
  const [triggered, setTriggered] = useState(false);

  const isResponsive = () => {
    const w = window.innerWidth;
    const mobile = w >= BREAKPOINT_MOBILE && responsive === 'mobile';
    const tablet = w >= BREAKPOINT_TABLET && responsive === 'tablet';
    const desktop = w >= BREAKPOINT_DESKTOP && responsive === 'desktop';

    return {
      mobile,
      tablet,
      desktop,
      anyOf: mobile || tablet || desktop,
    };
  };

  const adjustHeight = () => {
    if (responsive) {
      if (isResponsive().anyOf) {
        setHeight(contentReference?.current?.clientHeight as number);
        setCollapsed(true);
      } else {
        setHeight(0);
        setCollapsed(false);
      }
    }
  };

  const resizeHandler = () => {
    adjustHeight();
  };

  const clickHandler = (e: ClickEvent) => {
    e.preventDefault();
    const newState = !isCollapsed;
    const contentHeight = contentReference?.current?.clientHeight as number;
    setCollapsed(newState);
    setTriggered(true);
    if (newState) {
      setHeight(contentHeight);
    } else {
      setHeight(0);
    }
  };

  const triggerHidden = responsive && isResponsive()[responsive];

  const updatedRenderProps = {
    collapsed: isCollapsed,
    triggerHidden,
    trigger: {
      className: [isCollapsed ? CLASSNAME_EXPANDED : '', triggerHidden ? 'is-hidden' : ''].join(' '),
      onClick: clickHandler,
      [NAME_ARIA_EXPANDED]: String(!!isCollapsed),
      [NAME_ARIA_CONTROLS]: INSTANCE_ID,
    },
  };

  const updatedWrapperProps = {
    id: INSTANCE_ID,
    style: {
      height: hideOnCollapse && triggered ? 'initial' : height,
      ...UNSAFE_style,
    },
    className: [wrapperClassName, collapsed ? CLASSNAME_COLLAPSED : '', UNSAFE_className].join(' '),
  };

  const updatedContentProps = {
    style: contentProps?.UNSAFE_style,
    className: [contentClassName, contentProps?.UNSAFE_className].join(' '),
    ref: contentReference,
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener('resize', resizeHandler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    height,
    triggered,
    responsive,
    contentProps,
    updatedWrapperProps,
    updatedContentProps,
    UNSAFE_style,
    UNSAFE_className,
    wrapperClassName,
    contentClassName,
    hideOnCollapse,
    contentReference,
    id: INSTANCE_ID,
    collapsed: isCollapsed,
    renderProps: updatedRenderProps,
    ...rest,
  } as useCollapsibleReturn;
};
