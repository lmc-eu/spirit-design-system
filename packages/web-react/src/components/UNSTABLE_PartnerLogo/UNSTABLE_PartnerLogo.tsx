'use client';

import classNames from 'classnames';
import React from 'react';
import { Sizes } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritPartnerLogoProps } from '../../types/partnerLogo';
import { usePartnerLogoStyleProps } from './usePartnerLogoStyleProps';

const defaultProps: Partial<SpiritPartnerLogoProps> = {
  size: Sizes.MEDIUM,
  hasSafeAreaDisabled: false,
};

const UNSTABLE_PartnerLogo = (props: SpiritPartnerLogoProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps } = usePartnerLogoStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <div {...otherProps} className={classNames(classProps, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

export default UNSTABLE_PartnerLogo;
