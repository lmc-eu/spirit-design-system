import { createContext, useContext } from 'react';

type ClassNamePrefixContextType = string | null | undefined;

const defaultContext: ClassNamePrefixContextType = undefined;

const ClassNamePrefixContext = createContext<ClassNamePrefixContextType>(defaultContext);
const ClassNamePrefixContextProvider = ClassNamePrefixContext.Provider;
const ClassNamePrefixContextConsumer = ClassNamePrefixContext.Consumer;

export default ClassNamePrefixContextContext;
export { ClassNamePrefixContextConsumer, ClassNamePrefixContextProvider };
export type { ClassNamePrefixContextContextType };
