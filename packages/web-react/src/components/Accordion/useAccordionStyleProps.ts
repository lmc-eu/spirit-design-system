import { useClassNamePrefix } from '../../hooks';

export interface AccordionStyleReturn {
  /** className props */
  classProps: {
    root: string;
    item: string;
    header: string;
    toggle: string;
    side: string;
    slot: string;
    icon: string;
    content: string;
  };
}

export const useAccordionStyleProps = (): AccordionStyleReturn => {
  const accordionClass = useClassNamePrefix('Accordion');
  const accordionItemClass = `${accordionClass}__item`;
  const accordionItemHeaderClass = `${accordionClass}__itemHeader`;
  const accordionItemToggleClass = `${accordionClass}__itemToggle`;
  const accordionItemSideClass = `${accordionClass}__itemSide`;
  const accordionItemSlotClass = `${accordionClass}__itemSlot`;
  const accordionItemIconClass = `${accordionClass}__itemIcon`;
  const accordionItemContentClass = `${accordionClass}__content`;

  return {
    classProps: {
      root: accordionClass,
      item: accordionItemClass,
      header: accordionItemHeaderClass,
      toggle: accordionItemToggleClass,
      side: accordionItemSideClass,
      slot: accordionItemSlotClass,
      icon: accordionItemIconClass,
      content: accordionItemContentClass,
    },
  };
};
