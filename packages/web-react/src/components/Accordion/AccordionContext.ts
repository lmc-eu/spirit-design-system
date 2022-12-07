import { createContext, useContext } from 'react';
import { AccordionContextProps } from '../../types';

const defaultContext: AccordionContextProps = {
  open: undefined,
};

const AccordionContext = createContext<AccordionContextProps>(defaultContext);
const AccordionProvider = AccordionContext.Provider;
const AccordionConsumer = AccordionContext.Consumer;
const useAccordionContext = (): AccordionContextProps => useContext(AccordionContext);

export default AccordionContext;
export { AccordionProvider, AccordionConsumer, useAccordionContext };
