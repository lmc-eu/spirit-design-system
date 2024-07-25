'use client';

import { createContext, useContext } from 'react';
import { AccordionItemContextProps } from '../../types';

const defaultContext: AccordionItemContextProps = {
  id: '',
};

const AccordionItemContext = createContext(defaultContext);
const AccordionItemProvider = AccordionItemContext.Provider;
const AccordionItemConsumer = AccordionItemContext.Consumer;
const useAccordionItemContext = (): AccordionItemContextProps => useContext(AccordionItemContext);

export default AccordionItemContext;
export { AccordionItemProvider, AccordionItemConsumer, useAccordionItemContext };
