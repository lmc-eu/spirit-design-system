'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritTabLinkProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useTabsStyleProps } from './useTabsStyleProps';

const defaultProps: SpiritTabLinkProps = {
  itemProps: {},
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_TabLink'] }] */
const _TabLink = <E extends ElementType = 'a'>(props: SpiritTabLinkProps<E>, ref: PolymorphicRef<E>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'a', children, itemProps = {}, ...restProps } = propsWithDefaults;
  const { classProps } = useTabsStyleProps();
  const { styleProps: itemStyleProps, props: itemTransferProps } = useStyleProps(itemProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.link });

  return (
    <li
      {...itemStyleProps}
      {...itemTransferProps}
      className={classNames(classProps.item, itemStyleProps.className)}
      role="presentation"
    >
      <ElementTag {...restProps} {...mergedStyleProps} ref={ref}>
        {children}
      </ElementTag>
    </li>
  );
};

const TabLink = forwardRef<HTMLAnchorElement, SpiritTabLinkProps<ElementType>>(_TabLink);

TabLink.spiritComponent = 'TabLink';

export default TabLink;
