import { useState } from 'react';

export interface UseTooltipReturn {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

export const useTooltip = (): UseTooltipReturn => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return {
    isOpen,
    onToggle: setOpen,
  };
};
