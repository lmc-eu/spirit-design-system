'use client';

import React from 'react';
import { useStyleProps } from '../../hooks';
import { type AccordionItemProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { AccordionItemProvider } from './AccordionItemContext';
import { useAccordionStyleProps } from './useAccordionStyleProps';

const AccordionItem = (props: AccordionItemProps) => {
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

export default AccordionItem;
