import { useState } from 'react';

export interface UseTooltipReturn {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

export const useTooltip = (isOpenProp: boolean = false): UseTooltipReturn => {
  const [isOpen, setOpen] = useState<boolean>(isOpenProp);

  return {
    isOpen,
    onToggle: setOpen,
  };
};
