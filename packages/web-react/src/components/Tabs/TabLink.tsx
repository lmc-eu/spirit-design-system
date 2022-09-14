import React from 'react';
import { ChildrenProps, RestProps } from '../../types';
import { useTabsStyleProps } from './useTabsStyleProps';

interface TabLinkProps extends ChildrenProps, RestProps {
  href: string;
}

const TabLink = ({ children, href }: TabLinkProps): JSX.Element => {
  const { classProps } = useTabsStyleProps();

  return (
    <li className={classProps.item}>
      <a href={href} className={classProps.link} role="tab">
        {children}
      </a>
    </li>
  );
};

export default TabLink;
