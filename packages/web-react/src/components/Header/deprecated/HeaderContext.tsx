import { createContext } from 'react';

type HeaderContextType = {
  headerClass: string;
  id: string;
  isExpanded: boolean;
  handleToggle: () => void;
};

const defaultContext: HeaderContextType = {
  headerClass: '',
  id: '',
  isExpanded: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleToggle: () => {},
};

const HeaderContext = createContext<HeaderContextType>(defaultContext);
const HeaderProvider = HeaderContext.Provider;
const HeaderConsumer = HeaderContext.Consumer;

export default HeaderContext;
export { HeaderConsumer, HeaderProvider };
export type { HeaderContextType };
