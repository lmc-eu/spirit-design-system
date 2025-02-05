'use client';

import React from 'react';
import { useStyleProps } from '../../hooks';
import { AccordionProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { AccordionProvider } from './AccordionContext';
import { useAccordionStyleProps } from './useAccordionStyleProps';

const Accordion = (props: AccordionProps) => {
  const { children, elementType: ElementTag = 'section', open, toggle, ...restProps } = props;

  const { classProps } = useAccordionStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.root, styleProps });

  const contextValue = {
    open,
    toggle,
  };

  return (
    <ElementTag {...transferProps} {...styleProps} {...mergedStyleProps}>
      <AccordionProvider value={contextValue}>{children}</AccordionProvider>
    </ElementTag>
  );
};

Accordion.spiritComponent = 'Accordion';

export default Accordion;
