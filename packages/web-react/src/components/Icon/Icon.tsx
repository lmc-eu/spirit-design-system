'use client';

import React, { ForwardedRef, forwardRef } from 'react';
import { useIcon, useStyleProps } from '../../hooks';
import { SpiritIconProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { htmlReactParser } from '../../utils/htmlReactParser';
import { DEFAULT_BOX_SIZE } from './constants';
import { useIconBoxSize } from './useIconBoxSize';
import { useIconStyleProps } from './useIconStyleProps';

const defaultProps = {
  ariaHidden: true,
  boxSize: DEFAULT_BOX_SIZE,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Icon'] }] */
const _Icon = (props: SpiritIconProps, ref: ForwardedRef<SVGSVGElement>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { boxSize, name, title, ariaHidden, ...restProps } = propsWithDefaults;
  let icon = useIcon(name);
  const iconSize = useIconBoxSize(boxSize);
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const { classProps, iconStyleProps } = useIconStyleProps(propsWithDefaults);
  const mergedStyleProps = mergeStyleProps('svg', {
    classProps,
    iconStyleProps,
    styleProps,
  });

  if (title) {
    icon = `<title>${title}</title>${icon}`;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Incompatible HTMLElement and SVGSVGElement
    <svg
      {...otherProps}
      {...mergedStyleProps}
      viewBox="0 0 24 24"
      fill="none"
      width={iconSize}
      height={iconSize}
      aria-hidden={ariaHidden}
      ref={ref}
    >
      {htmlReactParser(icon)}
    </svg>
  );
};

const Icon = forwardRef<SVGSVGElement, SpiritIconProps>(_Icon);

Icon.spiritComponent = 'Icon';

export default Icon;
