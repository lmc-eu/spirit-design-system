// @TODO: Remove this after https://github.com/lmc-eu/spirit-design-system/pull/532
import React, { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { useModalStyleProps } from './useModalStyleProps';
import { useStyleProps } from '../../hooks';

interface ModalBackdropProps {
  isOpen: boolean;
}

const ModalBackdrop = (
  { isOpen, ...restProps }: ModalBackdropProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => {
  const { classProps } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div
      ref={ref}
      {...otherProps}
      {...styleProps}
      className={classNames(classProps.backdrop, styleProps.className)}
      aria-hidden={!isOpen}
    />
  );
};

export default forwardRef(ModalBackdrop);
