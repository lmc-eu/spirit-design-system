import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { TooltipWrapperProps } from '../../types';
import { useTooltipStyleProps } from './useTooltipStyleProps';

const TooltipWrapper = ({ children, ...restProps }: TooltipWrapperProps) => {
  const { classProps, props: modifiedProps } = useTooltipStyleProps({ ...restProps });
  const { styleProps } = useStyleProps({ ...modifiedProps });

  return (
    <div className={classNames(classProps.wrapperClassName, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

export default TooltipWrapper;
