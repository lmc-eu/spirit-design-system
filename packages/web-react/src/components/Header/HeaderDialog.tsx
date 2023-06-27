import React from 'react';
import classNames from 'classnames';
import { useStyleProps, useLastActiveFocus } from '../../hooks';
import { HeaderDialogProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';
import { HeaderDialogProvider } from './HeaderDialogContext';
import { Dialog } from '../Dialog';

const HeaderDialog = (props: HeaderDialogProps) => {
  const { children, id, isOpen, onClose, ...restProps } = props;

  const { classProps } = useHeaderStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const providerValue = { id, isOpen, onClose };

  useLastActiveFocus(isOpen);

  return (
    <HeaderDialogProvider value={providerValue}>
      <Dialog
        {...otherProps}
        id={id}
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(classProps.headerDialog.root, styleProps.className)}
        style={styleProps.style}
      >
        <div className={classProps.headerDialog.panel}>
          <div className={classProps.headerDialog.content}>{children}</div>
        </div>
      </Dialog>
    </HeaderDialogProvider>
  );
};

export default HeaderDialog;
