'use client';

import { createContext, useContext } from 'react';
import { DrawerPanelHandlingProps } from '../../types';

export type DrawerContextProps = {
  id: string;
} & DrawerPanelHandlingProps;

const defaultContext: DrawerContextProps = {
  id: '',
  isOpen: false,
  onClose: () => null,
};

const DrawerContext = createContext<DrawerContextProps>(defaultContext);
const DrawerProvider = DrawerContext.Provider;
const DrawerConsumer = DrawerContext.Consumer;
const useDrawerContext = (): DrawerContextProps => useContext(DrawerContext);

export default DrawerContext;
export { DrawerProvider, DrawerConsumer, useDrawerContext };
