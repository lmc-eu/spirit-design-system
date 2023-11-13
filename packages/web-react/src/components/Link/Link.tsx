import React, { ElementType, forwardRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritLinkProps, PolymorphicRef } from '../../types';
import { useLinkStyleProps } from './useLinkStyleProps';

const defaultProps = {
  color: 'primary',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Link'] }] */
const _Link = <E extends ElementType = 'a', T = void>(
  props: SpiritLinkProps<E, T>,
  ref: PolymorphicRef<E>,
): JSX.Element => {
  const { elementType: ElementTag = 'a', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useLinkStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      href={restProps.href}
      className={classNames(classProps, styleProps.className)}
      ref={ref}
    >
      {children}
    </ElementTag>
  );
};

export const Link = forwardRef<HTMLAnchorElement, SpiritLinkProps<ElementType>>(_Link);

Link.defaultProps = defaultProps;

export default Link;
