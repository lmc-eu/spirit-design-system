import React from 'react';
import classNames from 'classnames';
import { useStyleProps, useLastActiveFocus } from '../../hooks';
import { HeaderDialogProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';
import { HeaderDialogProvider } from './HeaderDialogContext';
import { Dialog } from '../Dialog';

const HeaderDialog = (props: HeaderDialogProps) => {
  const { children, id, isOpen, onClose, ...restProps } = props;

  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const providerValue = { id, open: isOpen, onClose };

  useLastActiveFocus(isOpen);

  return (
    <HeaderDialogProvider value={providerValue}>
      <Dialog
        id={id}
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(classProps.headerDialog.root, styleProps.className)}
        style={styleProps.style}
        {...otherProps}
      >
        <div className={classProps.headerDialog.panel}>
          <div className={classProps.headerDialog.content}>{children}</div>
        </div>
      </Dialog>
    </HeaderDialogProvider>
  );
};

export default HeaderDialog;
