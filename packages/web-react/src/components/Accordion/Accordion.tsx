'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { AccordionProps } from '../../types';
import { AccordionProvider } from './AccordionContext';
import { useAccordionStyleProps } from './useAccordionStyleProps';

const Accordion = (props: AccordionProps) => {
  const { children, elementType: ElementTag = 'section', open, toggle, ...restProps } = props;

  const { classProps } = useAccordionStyleProps();
  const { styleProps, props: transferProps } = useStyleProps({ ElementTag, ...restProps });

  const contextValue = {
    open,
    toggle,
  };

  return (
    <ElementTag {...transferProps} {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <AccordionProvider value={contextValue}>{children}</AccordionProvider>
    </ElementTag>
  );
};

Accordion.spiritComponent = 'Accordion';

export default Accordion;
