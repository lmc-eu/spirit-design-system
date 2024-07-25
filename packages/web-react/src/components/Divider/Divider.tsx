'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritDividerProps } from '../../types';
import { useDividerStyleProps } from './useDividerStyleProps';

export const Divider = (props: SpiritDividerProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useDividerStyleProps(props);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return <hr {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)} />;
};

export default Divider;
