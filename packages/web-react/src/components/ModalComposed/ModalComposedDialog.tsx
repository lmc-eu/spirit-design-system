import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ModalComposedDialogProps, ModalComposedDialogElementType } from '../../types/modalComposed';
import { useModalComposedStyleProps } from './useModalComposedStyleProps';

const ModalComposedDialog = <E extends ElementType = ModalComposedDialogElementType>(
  props: ModalComposedDialogProps<E>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { elementType: ElementTag = 'article', children, isExpandedOnMobile, ...restProps } = props;

  const { classProps } = useModalComposedStyleProps({ isExpandedOnMobile });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

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
