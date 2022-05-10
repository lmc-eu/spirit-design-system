import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useLinkStyleProps } from './useLinkStyleProps';
import { SpiritLinkProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';

const defaultProps = {
  color: 'primary',
};

export const Link = <T extends ElementType = 'a'>(props: SpiritLinkProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'a', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useLinkStyleProps(restProps);
  const { styleProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...styleProps} href={restProps.href} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Link.defaultProps = defaultProps;

export default Link;
