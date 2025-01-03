'use client';

import classNames from 'classnames';
import React, { ElementType, ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { useStyleProps } from '../../hooks';
import { DrawerPanelElementType, DrawerPanelProps } from '../../types';
import { useDrawerPanelStyleProps } from './useDrawerPanelStyleProps';
import { useDrawerStyleProps } from './useDrawerStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_DrawerPanel'] }] */
const _DrawerPanel = <E extends ElementType = DrawerPanelElementType>(
  props: DrawerPanelProps<E>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;

  const { classProps } = useDrawerStyleProps(restProps);
  const { drawerPanelStyleProps, props: otherStyleProps } = useDrawerPanelStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(otherStyleProps);

  const combinedStyleProps = { ...styleProps.style, ...drawerPanelStyleProps };

  return (
    <ElementTag
      ref={ref}
      {...(otherProps as HTMLAttributes<HTMLElement>)}
      style={{ ...(combinedStyleProps as HTMLAttributes<HTMLElement>) }}
      className={classNames(classProps.panel, styleProps.className)}
    >
      {children}
    </ElementTag>
  );
};

const DrawerPanel = forwardRef<HTMLDivElement, DrawerPanelProps<ElementType>>(_DrawerPanel);

export default DrawerPanel;
