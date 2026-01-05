'use client';

import React, { type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritAccordionProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { AccordionProvider } from './AccordionContext';
import { useAccordionStyleProps } from './useAccordionStyleProps';

const Accordion = <T extends ElementType = 'section'>(props: SpiritAccordionProps<T>) => {
  const { children, elementType: ElementTag = 'section', open, toggle, ...restProps } = props;

  const { classProps } = useAccordionStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.root, styleProps });

  const contextValue = {
    open,
    toggle,
  };

  return (
    <ElementTag {...transferProps} {...mergedStyleProps}>
      <AccordionProvider value={contextValue}>{children}</AccordionProvider>
    </ElementTag>
  );
};

Accordion.spiritComponent = 'Accordion';

export default Accordion;
