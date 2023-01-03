import { useContext } from 'react';
import HeaderContext, { HeaderContextType } from './HeaderContext';

export const useHeader = (): HeaderContextType => useContext(HeaderContext);
