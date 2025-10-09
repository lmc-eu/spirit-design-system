'use client';

import React from 'react';
import { type UncontrolledAccordionProps } from '../../types';
import Accordion from './Accordion';
import { useAccordion } from './useAccordion';

const UncontrolledAccordion = (props: UncontrolledAccordionProps) => {
  const { defaultOpen, stayOpen, ...restProps } = props;

  const { open, toggle } = useAccordion({ defaultOpen, stayOpen });

  return <Accordion open={open} toggle={toggle} {...restProps} />;
};

UncontrolledAccordion.spiritComponent = 'UncontrolledAccordion';

export default UncontrolledAccordion;
