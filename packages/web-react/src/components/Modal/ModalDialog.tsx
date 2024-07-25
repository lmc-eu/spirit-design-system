'use client';

import classNames from 'classnames';
import React, { ElementType, ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { useStyleProps } from '../../hooks';
import { ModalDialogElementType, ModalDialogProps } from '../../types';
import { useModalDialogStyleProps } from './useModalDialogStyleProps';
import { useModalStyleProps } from './useModalStyleProps';

const ModalDialog = <E extends ElementType = ModalDialogElementType>(
  props: ModalDialogProps<E>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const {
    elementType: ElementTag = 'article',
    children,
    isDockedOnMobile,
    isExpandedOnMobile,
    isScrollable,
    ...restProps
  } = props;

  const { classProps } = useModalStyleProps({ isDockedOnMobile, isExpandedOnMobile, isScrollable });
  const { modalDialogStyleProps, props: otherStyleProps } = useModalDialogStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(otherStyleProps);

  const combinedStyleProps = { ...styleProps.style, ...modalDialogStyleProps };

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

export default forwardRef(ModalDialog);
