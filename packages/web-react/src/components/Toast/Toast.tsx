'use client';

import classNames from 'classnames';
import React from 'react';
import { AlignmentX, AlignmentY } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritToastProps } from '../../types';
import { useToastStyleProps } from './useToastStyleProps';

const defaultProps: SpiritToastProps = {
  alignmentX: AlignmentX.CENTER,
  alignmentY: AlignmentY.BOTTOM,
  isCollapsible: true,
};

const Toast = (props: SpiritToastProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, alignmentX, alignmentY, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useToastStyleProps({ ...restProps, alignmentX, alignmentY });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <div {...otherProps} {...styleProps} className={classNames(classProps.root, styleProps.className)} role="log">
      <div className={classProps.queue}>{children}</div>
    </div>
  );
};

export default Toast;
