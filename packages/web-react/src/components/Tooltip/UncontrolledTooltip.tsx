import React from 'react';
import { SpiritTooltipProps } from '../../types';
import Tooltip from './Tooltip';
import { useTooltip } from './useTooltip';

export const UncontrolledTooltip = (props: Omit<SpiritTooltipProps, 'onToggle'>) => {
  const { children, ...restProps } = props;
  const { isOpen, onToggle } = useTooltip();

  return (
    <Tooltip {...restProps} isOpen={isOpen} onToggle={onToggle}>
      {children}
    </Tooltip>
  );
};

export default UncontrolledTooltip;
