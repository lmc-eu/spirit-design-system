'use client';

import React, { ForwardedRef, forwardRef } from 'react';
import { useIcon, useStyleProps } from '../../hooks';
import { IconProps } from '../../types';
import { htmlReactParser } from '../../utils/htmlReactParser';

const defaultProps = {
  ariaHidden: true,
  boxSize: 24,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Icon'] }] */
const _Icon = (props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { boxSize, name, title, ariaHidden, ...restProps } = propsWithDefaults;
  let icon = useIcon(name);
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  if (title) {
    icon = `<title>${title}</title>${icon}`;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Incompatible HTMLElement and SVGSVGElement
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={boxSize}
      height={boxSize}
      aria-hidden={ariaHidden}
      {...otherProps}
      {...styleProps}
      className={styleProps.className}
      ref={ref}
    >
      {htmlReactParser(icon)}
    </svg>
  );
};

const Icon = forwardRef<SVGSVGElement, IconProps>(_Icon);
export default Icon;
