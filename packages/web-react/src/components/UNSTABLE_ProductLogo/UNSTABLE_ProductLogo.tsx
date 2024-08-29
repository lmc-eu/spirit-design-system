'use client';

import classNames from 'classnames';
import React from 'react';
import { useClassNamePrefix, useStyleProps } from '../../hooks';
import { SpiritProductLogoProps } from '../../types/productLogo';

const UNSTABLE_ProductLogo = (props: SpiritProductLogoProps) => {
  const { children, ...restProps } = props;

  const productLogoClass = useClassNamePrefix('UNSTABLE_ProductLogo');
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} className={classNames(productLogoClass, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

export default UNSTABLE_ProductLogo;
