'use client';

import React from 'react';
import { SpiritTooltipProps } from '../../types';
import Tooltip from './Tooltip';
import { useTooltip } from './useTooltip';

export const UncontrolledTooltip = (props: Omit<SpiritTooltipProps, 'onToggle'>) => {
  const { children, isOpen: isOpenProp, ...restProps } = props;
  const { isOpen, onToggle } = useTooltip(isOpenProp);

  return (
    <Tooltip {...restProps} isOpen={isOpen} onToggle={onToggle}>
      {children}
    </Tooltip>
  );
};

export default UncontrolledTooltip;
