'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritBreadcrumbsItemProps } from '../../types';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { useBreadcrumbsStyleProps } from './useBreadcrumbsStyleProps';

const defaultProps = {
  iconNameEnd: 'chevron-right',
  iconNameStart: 'chevron-left',
  isCurrent: false,
  isGoBackOnly: false,
};

export const BreadcrumbsItem = (props: SpiritBreadcrumbsItemProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, href, isCurrent, iconNameStart, iconNameEnd, ...restProps } = propsWithDefaults;
  const { classProps, props: otherProps } = useBreadcrumbsStyleProps({ ...restProps });
  const { styleProps, props: transferProps } = useStyleProps(otherProps);

  return (
    <li {...transferProps} {...styleProps} className={classNames(classProps.item, styleProps.className)}>
      {restProps.isGoBackOnly && iconNameStart && <Icon name={iconNameStart} />}
      {!href && isCurrent ? (
        children
      ) : (
        <Link
          href={href}
          color={isCurrent ? 'secondary' : 'primary'}
          isUnderlined={!isCurrent}
          aria-current={isCurrent ? 'page' : undefined}
        >
          {children}
        </Link>
      )}
      {!isCurrent && !restProps.isGoBackOnly && iconNameEnd && <Icon name={iconNameEnd} />}
    </li>
  );
};

export default BreadcrumbsItem;
