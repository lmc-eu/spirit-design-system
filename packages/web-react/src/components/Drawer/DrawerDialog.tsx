'use client';

import classNames from 'classnames';
import React, { ElementType, ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { useStyleProps } from '../../hooks';
import { DrawerDialogElementType, DrawerDialogProps } from '../../types';
import { useDrawerDialogStyleProps } from './useDrawerDialogStyleProps';
import { useDrawerStyleProps } from './useDrawerStyleProps';

const DrawerDialog = <E extends ElementType = DrawerDialogElementType>(
  props: DrawerDialogProps<E>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;

  const { classProps } = useDrawerStyleProps(restProps);
  const { drawerDialogStyleProps, props: otherStyleProps } = useDrawerDialogStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(otherStyleProps);

  const combinedStyleProps = { ...styleProps.style, ...drawerDialogStyleProps };

  return (
    <ElementTag
      ref={ref}
      {...(otherProps as HTMLAttributes<HTMLElement>)}
      style={{ ...(combinedStyleProps as HTMLAttributes<HTMLElement>) }}
      className={classNames(classProps.dialog, styleProps.className)}
    >
      {children}
    </ElementTag>
  );
};

export default forwardRef(DrawerDialog);
