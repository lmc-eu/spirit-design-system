'use client';

import React, { type ElementType } from 'react';
import { type SpiritAccordionProps, type SpiritUncontrolledAccordionProps } from '../../types';
import Accordion from './Accordion';
import { useAccordion } from './useAccordion';

const UncontrolledAccordion = <T extends ElementType = 'section'>(props: SpiritUncontrolledAccordionProps<T>) => {
  const { defaultOpen, stayOpen, ...restProps } = props;

  const { open, toggle } = useAccordion({ defaultOpen, stayOpen });

  return <Accordion {...(restProps as SpiritAccordionProps<T>)} open={open} toggle={toggle} />;
};

UncontrolledAccordion.spiritComponent = 'UncontrolledAccordion';
UncontrolledAccordion.spiritDefaultElement = 'section' as const;
UncontrolledAccordion.spiritDefaultProps = null as unknown as SpiritUncontrolledAccordionProps<'section'>;

export default UncontrolledAccordion;
