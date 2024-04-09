import { useContext } from 'react';
import { ToastContext } from './ToastContext';

export const useToast = () => {
  const currentToastContext = useContext(ToastContext);

  if (!currentToastContext) {
    throw new Error('useToast has to be used within <ToastProvider>');
  }

  return currentToastContext;
};
