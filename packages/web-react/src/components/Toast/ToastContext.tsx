import React, { FC, ReactNode, createContext, useCallback, useMemo, useReducer } from 'react';
import { ToastColorType } from '../../types';

type ToastState = {
  queue: ToastItem[];
};

export interface ToastItem {
  color: ToastColorType | undefined;
  iconName: string | undefined;
  hasIcon: boolean;
  isDismissible: boolean;
  id: string;
  isOpen: boolean;
  message: string | JSX.Element;
}

export interface ToastContextType extends ToastState {
  clear: () => void;
  hide: (id: string) => void;
  setQueue: (newQueue: ToastItem[]) => void;
  show: (
    text: string | JSX.Element,
    id: string,
    options?: { color?: ToastColorType; iconName?: string; hasIcon?: boolean; isDismissible?: boolean },
  ) => void;
}

const defaultToastContext: ToastContextType = {
  clear: () => {},
  hide: () => {},
  queue: [],
  setQueue: () => {},
  show: () => {},
};

export const ToastContext = createContext<ToastContextType>(defaultToastContext);

type ActionType =
  | {
      type: 'show';
      payload: {
        text: string | JSX.Element;
        toastId: string;
        options?: { color?: ToastColorType; iconName?: string; hasIcon?: boolean; isDismissible?: boolean };
      };
    }
  | { type: 'hide'; payload: { id: string } }
  | { type: 'clear'; payload: null }
  | { type: 'setQueue'; payload: { newQueue: ToastItem[] } };

const reducer = (state: ToastState, action: ActionType): ToastState => {
  const { type, payload } = action;
  const { queue: currentQueue } = state;

  switch (type) {
    case 'show': {
      const newQueue = [
        ...currentQueue,
        {
          color: payload.options?.color || undefined,
          hasIcon: payload.options?.hasIcon || false,
          iconName: payload.options?.iconName,
          id: payload.toastId,
          isDismissible: payload.options?.isDismissible || false,
          isOpen: true,
          message: payload.text,
        },
      ];

      return { queue: newQueue };
    }

    case 'hide': {
      return { queue: currentQueue.filter((item) => item.id !== payload.id) };
    }

    case 'clear':
      return { queue: [] };

    default:
      throw new Error();
  }
};

interface ToastProviderProps {
  children: ReactNode;
}

const initialToastState: ToastState = {
  queue: [],
};

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialToastState);
  const { queue } = state;

  const show = useCallback(
    (
      text: string | JSX.Element,
      toastId: string,
      options?: { color?: ToastColorType; iconName?: string; hasIcon?: boolean; isDismissible?: boolean },
    ) => {
      dispatch({ type: 'show', payload: { text, toastId, options } });
    },
    [],
  );

  const hide = useCallback((id: string) => {
    dispatch({ type: 'hide', payload: { id } });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: 'clear', payload: null });
  }, []);

  const setQueue = useCallback((newQueue: ToastItem[]) => {
    dispatch({ type: 'clear', payload: null });

    newQueue.forEach((item) => {
      dispatch({
        type: 'show',
        payload: {
          text: item.message,
          toastId: item.id,
          options: {
            color: item.color,
            iconName: item.iconName,
            hasIcon: item.hasIcon,
            isDismissible: item.isDismissible,
          },
        },
      });
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      clear,
      hide,
      queue,
      setQueue,
      show,
    }),
    [hide, show, clear, queue.length, setQueue],
  );

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};
