import React from 'react';
import { UncontrolledTooltipProps } from '../../types';
import Tooltip from './Tooltip';
import { useTooltip } from './useTooltip';

const UncontrolledTooltip = (props: UncontrolledTooltipProps) => {
  const { children, isDismissible, ...restProps } = props;

  const { open, onClose } = useTooltip({ isDismissible });

  return (
    <Tooltip open={open} onClose={onClose} isDismissible={isDismissible} {...restProps}>
      {children}
    </Tooltip>
  );
};

export default UncontrolledTooltip;
