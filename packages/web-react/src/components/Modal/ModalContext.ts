'use client';

import { createContext, useContext } from 'react';
import { ModalDialogHandlingProps } from '../../types';

export type ModalContextProps = {
  id: string;
} & ModalDialogHandlingProps;

const defaultContext: ModalContextProps = {
  id: '',
  isOpen: false,
  onClose: () => null,
};

const ModalContext = createContext<ModalContextProps>(defaultContext);
const ModalProvider = ModalContext.Provider;
const ModalConsumer = ModalContext.Consumer;
const useModalContext = (): ModalContextProps => useContext(ModalContext);

export default ModalContext;
export { ModalProvider, ModalConsumer, useModalContext };
