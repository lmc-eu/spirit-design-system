import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritLinkProps } from '../../types';
import { useLinkStyleProps } from './useLinkStyleProps';

const defaultProps = {
  color: 'primary',
};

export const Link = <E extends ElementType = 'a', T = void>(props: SpiritLinkProps<E, T>): JSX.Element => {
  const { elementType: ElementTag = 'a', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useLinkStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      href={restProps.href}
      className={classNames(classProps, styleProps.className)}
    >
      {children}
    </ElementTag>
  );
};

Link.defaultProps = defaultProps;

export default Link;
