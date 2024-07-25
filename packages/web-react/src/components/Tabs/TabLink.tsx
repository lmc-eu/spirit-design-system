'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritTabLinkProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TabLink'] }] */
const _TabLink = <E extends ElementType = 'a'>(props: SpiritTabLinkProps<E>, ref: PolymorphicRef<E>): JSX.Element => {
  const { elementType: ElementTag = 'a', children, itemProps = {}, ...restProps } = props;
  const { classProps } = useTabsStyleProps();
  const { styleProps: itemStyleProps, props: itemTransferProps } = useStyleProps(itemProps);

  return (
    <li {...itemStyleProps} {...itemTransferProps} className={classNames(classProps.item, itemStyleProps.className)}>
      <ElementTag {...restProps} className={classProps.link} role="tab" ref={ref}>
        {children}
      </ElementTag>
    </li>
  );
};

export const TabLink = forwardRef<HTMLAnchorElement, SpiritTabLinkProps<ElementType>>(_TabLink);

TabLink.defaultProps = {
  itemProps: {},
};

export default TabLink;
