'use client';

import classNames from 'classnames';
import React from 'react';
import { AlignmentYExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritNavigationItemProps } from '../../types';
import { useNavigationStyleProps } from './useNavigationStyleProps';

const defaultProps: Partial<SpiritNavigationItemProps> = {
  alignmentY: AlignmentYExtended.CENTER,
};

const NavigationItem = (props: SpiritNavigationItemProps): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps } = useNavigationStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <li {...otherProps} className={classNames(classProps.item, styleProps.className)} style={styleProps.style}>
      {children}
    </li>
  );
};

export default NavigationItem;
