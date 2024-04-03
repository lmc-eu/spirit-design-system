import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritToastProps } from '../../types';
import { useToastStyleProps } from './useToastStyleProps';

const Toast = (props: SpiritToastProps) => {
  const { children, alignmentX = 'center', alignmentY = 'bottom', ...restProps } = props;
  const { classProps, props: modifiedProps } = useToastStyleProps({ ...restProps, alignmentX, alignmentY });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <div {...otherProps} {...styleProps} className={classNames(classProps.root, styleProps.className)} role="log">
      <div className={classProps.queue}>{children}</div>
    </div>
  );
};

export default Toast;
