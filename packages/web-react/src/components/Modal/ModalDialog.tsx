import React, { CSSProperties, ElementType, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ModalDialogProps, ModalDialogElementType } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';

interface CustomizedHeightCSSProperties extends CSSProperties {
  '--modal-max-height-tablet'?: string;
  '--modal-preferred-height-mobile'?: string;
  '--modal-preferred-height-tablet'?: string;
}

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
    maxHeightFromTabletUp,
    preferredHeightOnMobile,
    preferredHeightFromTabletUp,
    ...restProps
  } = props;

  const { classProps } = useModalStyleProps({ isDockedOnMobile, isExpandedOnMobile, isScrollable });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const customizedHeightStyle: CustomizedHeightCSSProperties = {
    '--modal-max-height-tablet': maxHeightFromTabletUp,
    '--modal-preferred-height-mobile': preferredHeightOnMobile,
    '--modal-preferred-height-tablet': preferredHeightFromTabletUp,
  };

  styleProps.style = {
    ...styleProps.style,
    ...customizedHeightStyle,
  };

  return (
    <ElementTag
      ref={ref}
      {...otherProps}
      {...styleProps}
      className={classNames(classProps.dialog, styleProps.className)}
    >
      {children}
    </ElementTag>
  );
};

export default forwardRef(ModalDialog);
