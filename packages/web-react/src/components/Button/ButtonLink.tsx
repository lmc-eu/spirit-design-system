import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritButtonLinkProps } from '../../types';
import { Spinner } from '../Spinner';
import { useButtonStyleProps } from './useButtonStyleProps';
import { useButtonLinkAriaProps } from './useButtonAriaProps';

const defaultProps = {
  color: 'primary',
  isBlock: false,
  isDisabled: false,
  isLoading: false,
  isSquare: false,
  size: 'medium',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_ButtonLink'] }] */
const _ButtonLink = <T extends ElementType = 'a', C = void, S = void>(
  props: SpiritButtonLinkProps<T, C, S>,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  const { elementType: ElementTag = 'a', children, ...restProps } = props;

  const { buttonLinkProps } = useButtonLinkAriaProps(restProps);
  const { classProps, props: modifiedProps } = useButtonStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...buttonLinkProps}
      ref={ref}
      className={classNames(classProps, styleProps.className)}
      style={styleProps.style}
    >
      {children}
      {props.isLoading && <Spinner />}
    </ElementTag>
  );
};

export const ButtonLink = forwardRef<HTMLAnchorElement, SpiritButtonLinkProps<ElementType>>(_ButtonLink);

ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
