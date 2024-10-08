'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritFooterProps } from '../../types';

export const Footer = (props: SpiritFooterProps): JSX.Element => {
  const { children, ...restProps } = props;
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const footerClasses = 'bg-cover pt-1100 pb-1000';

  return (
    <footer {...styleProps} {...otherProps} className={classNames(footerClasses, styleProps.className)}>
      {children}
    </footer>
  );
};

export default Footer;
