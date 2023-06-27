import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderLinkProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderLink = (props: HeaderLinkProps) => {
  const { children, isCurrent, ...restProps } = props;

  const { classProps } = useHeaderStyleProps({ isCurrentLink: isCurrent });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <a {...otherProps} className={classNames(classProps.headerLink, styleProps.className)} style={styleProps.style}>
      {children}
    </a>
  );
};

export default HeaderLink;
