'use client';

import React, { type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritAccordionItemProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { AccordionItemProvider } from './AccordionItemContext';
import { useAccordionStyleProps } from './useAccordionStyleProps';

const AccordionItem = <T extends ElementType = 'article'>(props: SpiritAccordionItemProps<T>) => {
  const { children, elementType: ElementTag = 'article', id, ...restProps } = props;

  const { classProps } = useAccordionStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.item, styleProps });

  const contextValue = { id };

  return (
    <ElementTag {...transferProps} id={id} {...mergedStyleProps}>
      <AccordionItemProvider value={contextValue}>{children}</AccordionItemProvider>
    </ElementTag>
  );
};

AccordionItem.spiritComponent = 'AccordionItem';
AccordionItem.spiritDefaultElement = 'article' as const;
AccordionItem.spiritDefaultProps = null as unknown as SpiritAccordionItemProps<'article'>;

export default AccordionItem;
