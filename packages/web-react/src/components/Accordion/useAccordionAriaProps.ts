import { Booleanish } from '../../types';

const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';
const NAME_ARIA_LABELEDBY = 'aria-labelledby';

export interface AccordionAriaProps {
  /** AccordionItem ID */
  id: string | undefined;
  /** open state */
  isOpen: boolean;
}

export interface AccordionAriaPropsReturn {
  /** item header returned props */
  headerProps: {
    id: string;
  };
  /** item header trigger returned props */
  triggerProps: {
    [NAME_ARIA_EXPANDED]: Booleanish;
    [NAME_ARIA_CONTROLS]: string;
  };
  /** item content returned props */
  contentProps: {
    id: string;
    [NAME_ARIA_LABELEDBY]: string;
  };
}

export const useAccordionAriaProps = ({ id, isOpen }: AccordionAriaProps): AccordionAriaPropsReturn => {
  const headerId = `${id}_Header`;
  const contentId = `${id}_Content`;

  const headerProps = {
    id: headerId,
  };
  const triggerProps = {
    [NAME_ARIA_EXPANDED]: isOpen,
    [NAME_ARIA_CONTROLS]: contentId,
  };
  const contentProps = {
    id: contentId,
    [NAME_ARIA_LABELEDBY]: headerId,
  };

  return {
    headerProps,
    triggerProps,
    contentProps,
  };
};
