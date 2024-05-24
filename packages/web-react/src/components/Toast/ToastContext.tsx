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
  content: ReactNode;
}

type ShowPayloadOptions = {
  autoCloseInterval?: number;
  color?: ToastColorType;
  enableAutoClose?: boolean;
  hasIcon?: boolean;
  iconName?: string;
  isDismissible?: boolean;
};

export interface ToastContextType extends ToastState {
  clear: () => void;
  hide: (id: string) => void;
  setQueue: (newQueue: ToastItem[]) => void;
  show: (content: ReactNode, id: string, options?: ShowPayloadOptions) => void;
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
        content: ReactNode;
        toastId: string;
        options?: ShowPayloadOptions;
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
          content: payload.content,
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

  const show = useCallback((content: ReactNode, toastId: string, options?: ShowPayloadOptions) => {
    dispatch({ type: 'show', payload: { content, toastId, options } });

    options?.enableAutoClose &&
      delayedCallback(() => hide(toastId), options?.autoCloseInterval || DEFAULT_TOAST_AUTO_CLOSE_INTERVAL);
  }, []);
  const setQueue = useCallback((newQueue: ToastItem[]) => {
    dispatch({ type: 'clear', payload: null });

    newQueue.forEach((item) => {
      const enableAutoClose = item.enableAutoClose ?? true;
      const autoCloseInterval = item.autoCloseInterval || DEFAULT_TOAST_AUTO_CLOSE_INTERVAL;

      dispatch({
        type: 'show',
        payload: {
          content: item.content,
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
