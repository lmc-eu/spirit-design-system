'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps, useLastActiveFocus } from '../../hooks';
import { SpiritDrawerProps } from '../../types';
import { Dialog } from '../Dialog';
import { DRAWER_ALIGNMENT_DEFAULT } from './constants';
import { DrawerProvider } from './DrawerContext';
import { useDrawerStyleProps } from './useDrawerStyleProps';

const Drawer = (props: SpiritDrawerProps) => {
  const { children, alignmentX = DRAWER_ALIGNMENT_DEFAULT, isOpen, onClose, id, ...restProps } = props;
  const { classProps } = useDrawerStyleProps({ drawerAlignmentX: alignmentX });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const contextValue = {
    id,
    isOpen,
    onClose,
  };

  useLastActiveFocus(isOpen);

  return (
    <DrawerProvider value={contextValue}>
      <Dialog
        {...otherProps}
        {...styleProps}
        id={id}
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(classProps.root, styleProps.className)}
      >
        {children}
      </Dialog>
    </DrawerProvider>
  );
};

export default Drawer;
