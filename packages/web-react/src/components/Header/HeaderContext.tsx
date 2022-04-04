import { createContext } from 'react';

type HeaderContextType = {
  headerClass: string;
  id: string;
};

const defaultContext: HeaderContextType = {
  headerClass: '',
  id: '',
};

const HeaderContext = createContext<HeaderContextType>(defaultContext);
const HeaderProvider = HeaderContext.Provider;
const HeaderConsumer = HeaderContext.Consumer;

export default HeaderContext;
export { HeaderConsumer, HeaderProvider };
export type { HeaderContextType };
