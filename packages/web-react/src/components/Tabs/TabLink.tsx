import React from 'react';
import { ChildrenProps, TransferProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

export interface TabLinkProps extends ChildrenProps, TransferProps {
  href: string;
}

const TabLink = ({ children, href, ...restProps }: TabLinkProps): JSX.Element => {
  const { classProps } = useTabsStyleProps();

  return (
    <li className={classProps.item}>
      <a {...restProps} href={href} className={classProps.link} role="tab">
        {children}
      </a>
    </li>
  );
};

export default TabLink;
