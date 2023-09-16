import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ChildrenProps, StyleProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

export type TabLinkItemProps = StyleProps & React.HTMLProps<HTMLLIElement>;

export interface TabLinkProps extends ChildrenProps {
  href: string;
  itemProps?: TabLinkItemProps;
}

const TabLink = ({ children, href, itemProps = {}, ...restProps }: TabLinkProps): JSX.Element => {
  const { classProps } = useTabsStyleProps();
  const { styleProps: itemStyleProps, props: itemTransferProps } = useStyleProps(itemProps);

  return (
    <li {...itemStyleProps} {...itemTransferProps} className={classNames(classProps.item, itemStyleProps.className)}>
      <a {...restProps} href={href} className={classProps.link} role="tab">
        {children}
      </a>
    </li>
  );
};

TabLink.defaultProps = {
  itemProps: {},
};

export default TabLink;
