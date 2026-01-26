'use client';

import React, { forwardRef, type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type AccordionProps, type PolymorphicRef } from '../../types';
import { mergeStyleProps } from '../../utils';
import { AccordionProvider } from './AccordionContext';
import { useAccordionStyleProps } from './useAccordionStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['AccordionInner'] }] */
const AccordionInner = <T extends ElementType = 'section'>(
  props: AccordionProps<T>,
  ref: PolymorphicRef<T>,
) => {
  const { children, elementType = 'section', open, toggle, ...restProps } = props;

  const Component = elementType as React.ElementType;

  const { classProps } = useAccordionStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(Component, { classProps: classProps.root, styleProps });

  const contextValue = {
    open,
    toggle,
  };

  return (
    <Component {...transferProps} {...mergedStyleProps} ref={ref}>
      <AccordionProvider value={contextValue}>{children}</AccordionProvider>
    </Component>
  );
};

const Accordion = forwardRef(AccordionInner) as <T extends ElementType = 'section'>(
  props: AccordionProps<T> & { ref?: PolymorphicRef<T> }
) => React.ReactElement;

Accordion.spiritComponent = 'Accordion';
Accordion.spiritDefaultElement = 'section' as const;
Accordion.spiritDefaultProps = null as unknown as AccordionProps<'section'>;
Accordion.displayName = 'Accordion';

export default Accordion;
