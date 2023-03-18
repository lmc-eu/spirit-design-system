import { createContext, useContext } from 'react';
import { ClickEvent } from '../../types';

export interface HeaderDialogContextProps {
  id: string;
  open: boolean;
  onClose: (event: ClickEvent) => void;
}

const defaultContext: HeaderDialogContextProps = {
  id: '',
  open: false,
  onClose: () => null,
};

const HeaderDialogContext = createContext<HeaderDialogContextProps>(defaultContext);
const HeaderDialogProvider = HeaderDialogContext.Provider;
const HeaderDialogConsumer = HeaderDialogContext.Consumer;
const useHeaderDialogContext = (): HeaderDialogContextProps => useContext(HeaderDialogContext);

export { HeaderDialogConsumer, HeaderDialogProvider, useHeaderDialogContext };
export default HeaderDialogContext;
