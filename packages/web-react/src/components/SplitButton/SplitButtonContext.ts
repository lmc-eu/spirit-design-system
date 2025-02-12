'use client';

import { createContext, useContext } from 'react';
import { ButtonColor, ButtonSize } from '../../types';

type SplitButtonContextType<C = void, S = void> = {
  color?: ButtonColor<C>;
  size?: ButtonSize<S>;
};

const defaultContext: SplitButtonContextType = {
  color: undefined,
  size: undefined,
};

const SplitButtonContext = createContext<SplitButtonContextType>(defaultContext);
const SplitButtonProvider = SplitButtonContext.Provider;
const SplitButtonConsumer = SplitButtonContext.Consumer;
const useSplitButtonContext = (): SplitButtonContextType => useContext(SplitButtonContext);

export default SplitButtonContext;
export { SplitButtonConsumer, SplitButtonProvider, useSplitButtonContext };
export type { SplitButtonContextType };
