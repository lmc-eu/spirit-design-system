'use client';

import { createContext, useContext } from 'react';
import { AccordionHandlingProps } from '../../types';

const defaultContext: AccordionHandlingProps = {
  open: undefined,
  toggle: () => null,
};

const AccordionContext = createContext<AccordionHandlingProps>(defaultContext);
const AccordionProvider = AccordionContext.Provider;
const AccordionConsumer = AccordionContext.Consumer;
const useAccordionContext = (): AccordionHandlingProps => useContext(AccordionContext);

export default AccordionContext;
export { AccordionProvider, AccordionConsumer, useAccordionContext };
