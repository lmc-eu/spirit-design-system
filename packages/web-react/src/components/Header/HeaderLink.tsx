import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderLinkProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderLink = (props: HeaderLinkProps) => {
  const { children, isCurrent, ...restProps } = props;

  const { classProps } = useHeaderModernStyleProps({ isCurrentLink: isCurrent });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <a className={classNames(classProps.headerLink, styleProps.className)} style={styleProps.style} {...otherProps}>
      {children}
    </a>
  );
};

export default HeaderLink;
