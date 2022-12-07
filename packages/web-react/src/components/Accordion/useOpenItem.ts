import { useAccordionContext } from './AccordionContext';

export const useOpenItem = (
  id: string | undefined,
): {
  isOpen: boolean;
} => {
  const { open } = useAccordionContext();

  const isOpen = (iid: string | undefined): boolean => {
    if (iid) {
      return !!(iid === open || open?.includes(iid));
    }

    return false;
  };

  return {
    isOpen: isOpen(id),
  };
};
