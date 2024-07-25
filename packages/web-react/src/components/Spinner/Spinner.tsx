'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritSpinnerProps } from '../../types';
import { Icon } from '../Icon';
import { useSpinnerStyleProps } from './useSpinnerStyleProps';

export const Spinner = <C extends undefined = undefined>(props: SpiritSpinnerProps<C>): JSX.Element => {
  const { classProps, props: modifiedProps } = useSpinnerStyleProps(props);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Incompatible HTMLElement and SVGSVGElement
    <Icon
      name="spinner"
      {...otherProps}
      UNSAFE_className={classNames(classProps, styleProps.className)}
      UNSAFE_style={styleProps.style}
    />
  );
};

export default Spinner;
