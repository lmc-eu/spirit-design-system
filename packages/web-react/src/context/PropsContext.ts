'use client';

import { createContext, useContext } from 'react';

type PropsContextType = Record<string, unknown> | null;

const PropsContext = createContext<PropsContextType>(null);

const PropsProvider = PropsContext.Provider;
const PropsConsumer = PropsContext.Consumer;

/**
 * Merges the props from the context with the provided props.
 * If the context is available, its values will override the corresponding props.
 *
 * @template T - The type of the props object
 * @param {T} props - Props to merge with the context
 * @returns {T} The merged props with context values taking precedence
 */
const usePropsContext = <T extends PropsContextType>(props: T = {} as T): T => {
  const context = useContext(PropsContext);

  return context ? { ...props, ...context } : props;
};

export default PropsContext;
export { PropsConsumer, PropsProvider, usePropsContext };
