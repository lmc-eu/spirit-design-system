import { useState } from 'react';
import { ClickEvent } from '../../types';

export interface UseTooltipProps {
  isDismissible?: boolean;
}

export interface UseTooltipReturn {
  open: boolean;
  onClose: (event: ClickEvent) => void;
}

export const useTooltip = ({ isDismissible }: UseTooltipProps): UseTooltipReturn => {
  const [open, setOpen] = useState<boolean>(!!isDismissible);

  const handleClose = () => setOpen(false);

  return {
    open,
    onClose: handleClose,
  };
};
