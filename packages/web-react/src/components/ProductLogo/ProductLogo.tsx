'use client';

import classNames from 'classnames';
import React from 'react';
import { useClassNamePrefix, useStyleProps } from '../../hooks';
import { SpiritProductLogoProps } from '../../types/productLogo';

const ProductLogo = (props: SpiritProductLogoProps) => {
  const { children, ...restProps } = props;

  const productLogoClass = useClassNamePrefix('ProductLogo');
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} className={classNames(productLogoClass, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

export default ProductLogo;
