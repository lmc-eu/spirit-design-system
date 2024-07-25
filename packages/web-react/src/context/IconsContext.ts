'use client';

import { createContext } from 'react';

type IconsContextType = Record<string, string> | null | undefined;

const defaultContext: IconsContextType = undefined;

const IconsContext = createContext<IconsContextType>(defaultContext);
const IconsProvider = IconsContext.Provider;
const IconsConsumer = IconsContext.Consumer;

export default IconsContext;
export { IconsConsumer, IconsProvider };
export type { IconsContextType };
