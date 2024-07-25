'use client';

import { createContext } from 'react';

type ClassNamePrefixContextType = string | null | undefined;

const defaultContext: ClassNamePrefixContextType = undefined;

const ClassNamePrefixContext = createContext<ClassNamePrefixContextType>(defaultContext);
const ClassNamePrefixProvider = ClassNamePrefixContext.Provider;
const ClassNamePrefixConsumer = ClassNamePrefixContext.Consumer;

export default ClassNamePrefixContext;
export { ClassNamePrefixConsumer, ClassNamePrefixProvider };
export type { ClassNamePrefixContextType };
