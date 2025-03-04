'use client';

import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { ToastLinkProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useToastBarStyleProps } from './useToastBarStyleProps';

const defaultProps: Partial<ToastLinkProps> = {
  elementType: 'a',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_ToastBarLink'] }] */
const _ToastBarLink = (props: ToastLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useToastBarStyleProps({ ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.link, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps} ref={ref}>
      {children as React.ReactNode}
    </ElementTag>
  );
};

const ToastBarLink = forwardRef<HTMLAnchorElement, ToastLinkProps>(_ToastBarLink);

ToastBarLink.spiritComponent = 'ToastBarLink';

export default ToastBarLink;
