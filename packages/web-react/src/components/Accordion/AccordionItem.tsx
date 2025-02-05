'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { AccordionItemProps } from '../../types';
import { AccordionItemProvider } from './AccordionItemContext';
import { useAccordionStyleProps } from './useAccordionStyleProps';

const AccordionItem = (props: AccordionItemProps) => {
  const { children, elementType: ElementTag = 'article', id, ...restProps } = props;

  const { classProps } = useAccordionStyleProps();
  const { styleProps, props: transferProps } = useStyleProps({ ElementTag, ...restProps });

  const contextValue = { id };

  return (
    <ElementTag
      {...transferProps}
      {...styleProps}
      id={id}
      className={classNames(classProps.item, styleProps.className)}
    >
      <AccordionItemProvider value={contextValue}>{children}</AccordionItemProvider>
    </ElementTag>
  );
};

AccordionItem.spiritComponent = 'AccordionItem';

export default AccordionItem;
