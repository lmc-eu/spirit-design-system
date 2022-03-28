import React, { ElementType } from 'react';
import { useLinkStyleProps } from './useLinkStyleProps';
import { SpiritLinkProps } from '../../types';
import { filterProps } from '../../utils/filterProps';

const defaultProps = {
  color: 'primary',
};

export const Link = <T extends ElementType = 'a'>(props: SpiritLinkProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'a', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useLinkStyleProps(restProps);

  return (
    <ElementTag {...filterProps(modifiedProps)} href={restProps.href} className={classProps}>
      {children}
    </ElementTag>
  );
};

Link.defaultProps = defaultProps;

export default Link;
