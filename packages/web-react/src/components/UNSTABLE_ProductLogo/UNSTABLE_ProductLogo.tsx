import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritProductLogoProps } from '../../types/productLogo';
import { useProductLogoStyleProps } from './useProductLogoStyleProps';

const defaultProps: Partial<SpiritProductLogoProps> = {
  isInverted: false,
};

const UNSTABLE_ProductLogo = (props: SpiritProductLogoProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps } = useProductLogoStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <div {...otherProps} className={classNames(classProps, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

export default UNSTABLE_ProductLogo;
