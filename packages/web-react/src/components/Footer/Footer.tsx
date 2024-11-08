'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritFooterProps } from '../../types';

const Footer = (props: SpiritFooterProps): JSX.Element => {
  const { children, ...restProps } = props;
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const footerClasses = 'bg-secondary pt-1400 pb-1200';

  return (
    <footer {...styleProps} {...otherProps} className={classNames(footerClasses, styleProps.className)}>
      {children}
    </footer>
  );
};

export default Footer;
