import React, { FC, ReactNode, createContext, useCallback, useMemo, useReducer } from 'react';
import { ToastColorType } from '../../types';
import { delayedCallback } from '../../utils';
import { DEFAULT_TOAST_AUTO_CLOSE_INTERVAL } from './constants';

type ToastState = {
  queue: ToastItem[];
};

export interface ToastItem {
  autoCloseInterval?: number;
  color?: ToastColorType;
  enableAutoClose?: boolean;
  hasIcon: boolean;
  iconName?: string;
  id: string;
  isDismissible: boolean;
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
    options?: {
      autoCloseInterval?: number;
      color?: ToastColorType;
      enableAutoClose?: boolean;
      hasIcon?: boolean;
      iconName?: string;
      isDismissible?: boolean;
    },
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
        options?: {
          autoCloseInterval?: number;
          color?: ToastColorType;
          enableAutoClose?: boolean;
          hasIcon?: boolean;
          iconName?: string;
          isDismissible?: boolean;
        };
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
          autoCloseInterval: payload.options?.autoCloseInterval || DEFAULT_TOAST_AUTO_CLOSE_INTERVAL,
          color: payload.options?.color || undefined,
          enableAutoClose: payload.options?.enableAutoClose || true,
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

  const hide = useCallback((id: string) => {
    dispatch({ type: 'hide', payload: { id } });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: 'clear', payload: null });
  }, []);

  const show = useCallback(
    (
      text: string | JSX.Element,
      toastId: string,
      options?: {
        autoCloseInterval?: number;
        color?: ToastColorType;
        enableAutoClose?: boolean;
        hasIcon?: boolean;
        iconName?: string;
        isDismissible?: boolean;
      },
    ) => {
      dispatch({ type: 'show', payload: { text, toastId, options } });

      options?.enableAutoClose &&
        delayedCallback(() => hide(toastId), options?.autoCloseInterval || DEFAULT_TOAST_AUTO_CLOSE_INTERVAL);
    },
    [],
  );
  const setQueue = useCallback((newQueue: ToastItem[]) => {
    dispatch({ type: 'clear', payload: null });

    newQueue.forEach((item) => {
      const enableAutoClose = item.enableAutoClose ?? true;
      const autoCloseInterval = item.autoCloseInterval || DEFAULT_TOAST_AUTO_CLOSE_INTERVAL;

      dispatch({
        type: 'show',
        payload: {
          text: item.message,
          toastId: item.id,
          options: {
            autoCloseInterval,
            enableAutoClose,
            color: item.color,
            hasIcon: item.hasIcon || false,
            iconName: item.iconName,
            isDismissible: item.isDismissible || false,
          },
        },
      });

      enableAutoClose && delayedCallback(() => hide(item.id), autoCloseInterval || DEFAULT_TOAST_AUTO_CLOSE_INTERVAL);
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
