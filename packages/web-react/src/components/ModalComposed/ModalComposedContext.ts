import { createContext, useContext } from 'react';
import { ModalComposedDialogHandlingProps } from '../../types/modalComposed';

export type ModalContextProps = {
  id: string;
} & ModalComposedDialogHandlingProps;

const defaultContext: ModalContextProps = {
  id: '',
  isOpen: false,
  onClose: () => null,
};

const ModalComposedContext = createContext<ModalContextProps>(defaultContext);
const ModalProvider = ModalComposedContext.Provider;
const ModalConsumer = ModalComposedContext.Consumer;
const useModalContext = (): ModalContextProps => useContext(ModalComposedContext);

export default ModalComposedContext;
export { ModalProvider, ModalConsumer, useModalContext };
