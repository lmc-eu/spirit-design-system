'use client';

import classNames from 'classnames';
import React from 'react';
import { AlignmentX } from '../../constants';
import { useStyleProps, useLastActiveFocus } from '../../hooks';
import { SpiritDrawerProps } from '../../types';
import Dialog from '../Dialog/Dialog';
import { DrawerProvider } from './DrawerContext';
import { useDrawerStyleProps } from './useDrawerStyleProps';

const Drawer = (props: SpiritDrawerProps) => {
  const { children, alignment = AlignmentX.RIGHT, isOpen, onClose, id, ...restProps } = props;
  const { classProps } = useDrawerStyleProps({ drawerAlignment: alignment });
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
        aria-labelledby={`${id}__title`}
      >
        {children}
      </Dialog>
    </DrawerProvider>
  );
};

export default Drawer;
