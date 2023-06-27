import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderDialogLinkProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderDialogLink = (props: HeaderDialogLinkProps) => {
  const { children, isCurrent, ...restProps } = props;

  const { classProps } = useHeaderStyleProps({ isCurrentLink: isCurrent });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <a
      {...otherProps}
      className={classNames(classProps.headerDialogLink, styleProps.className)}
      style={styleProps.style}
    >
      {children}
    </a>
  );
};

export default HeaderDialogLink;
