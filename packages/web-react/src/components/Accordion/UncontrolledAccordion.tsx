'use client';

import React, { type ElementType } from 'react';
import { type SpiritUncontrolledAccordionProps } from '../../types';
import Accordion from './Accordion';
import { useAccordion } from './useAccordion';

const UncontrolledAccordion = <T extends ElementType = 'section'>(props: SpiritUncontrolledAccordionProps<T>) => {
  const { defaultOpen, stayOpen, ...restProps } = props;

  const { open, toggle } = useAccordion({ defaultOpen, stayOpen });

  return <Accordion open={open} toggle={toggle} {...restProps} />;
};

UncontrolledAccordion.spiritComponent = 'UncontrolledAccordion';

export default UncontrolledAccordion;
