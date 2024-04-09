import React, { FC, ReactNode, createContext, useCallback, useMemo, useReducer } from 'react';
import { ToastColorType } from '../../types';

interface ToastState {
  color: ToastColorType | undefined;
  iconName: string | undefined;
  id: string;
  isOpen: boolean;
  message: string | JSX.Element | null;
}

export interface ToastContextType extends ToastState {
  show: (text: string | JSX.Element, id: string, options?: { color?: ToastColorType; iconName?: string }) => void;
  hide: () => void;
}

const initialToastState: ToastState = {
  color: undefined,
  iconName: undefined,
  id: '',
  isOpen: false,
  message: null,
};

const defaultToastContext: ToastContextType = {
  hide: () => {},
  show: () => {},
  ...initialToastState,
};

export const ToastContext = createContext<ToastContextType>(defaultToastContext);

type ActionType =
  | {
      type: 'show';
      payload: {
        text: string | JSX.Element;
        toastId: string;
        options?: { color?: ToastColorType; iconName?: string };
      };
    }
  | { type: 'hide'; payload: null };

const reducer = (state: ToastState, action: ActionType): ToastState => {
  const { type, payload } = action;

  switch (type) {
    case 'show':
      return {
        ...state,
        message: payload?.text,
        id: payload?.toastId,
        color: payload?.options?.color || undefined,
        iconName: payload?.options?.iconName || undefined,
        isOpen: true,
      };

    case 'hide':
      return { ...state, isOpen: false };

    default:
      throw new Error();
  }
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [{ message, id, color, iconName, isOpen }, dispatch] = useReducer(reducer, initialToastState);

  const show = useCallback(
    (text: string | JSX.Element, toastId: string, options?: { color?: ToastColorType; iconName?: string }) => {
      dispatch({ type: 'show', payload: { text, toastId, options } });
    },
    [],
  );

  const hide = useCallback(() => {
    dispatch({ type: 'hide', payload: null });
  }, []);

  const contextValue = useMemo(
    () => ({
      color,
      hide,
      iconName,
      id,
      isOpen,
      message,
      show,
    }),
    [color, hide, iconName, id, isOpen, message, show],
  );

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};
