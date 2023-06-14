import React, { CSSProperties, ElementType, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ModalComposedDialogProps, ModalComposedDialogElementType } from '../../types/modalComposed';
import { useModalComposedStyleProps } from './useModalComposedStyleProps';

interface CustomizedHeightCSSProperties extends CSSProperties {
  '--modal-max-height-tablet'?: string;
  '--modal-preferred-height-mobile'?: string;
  '--modal-preferred-height-tablet'?: string;
}

const ModalComposedDialog = <E extends ElementType = ModalComposedDialogElementType>(
  props: ModalComposedDialogProps<E>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const {
    elementType: ElementTag = 'article',
    children,
    isExpandedOnMobile,
    maxHeightFromTabletUp,
    preferredHeightOnMobile,
    preferredHeightFromTabletUp,
    ...restProps
  } = props;

  const { classProps } = useModalComposedStyleProps({ isExpandedOnMobile });
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

export default forwardRef(ModalComposedDialog);
