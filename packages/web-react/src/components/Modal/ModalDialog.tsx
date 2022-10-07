import { createElement } from 'react';
import { SpiritModalDialogProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';

const ModalDialog = ({ children }: SpiritModalDialogProps) => {
  const { modalDialogClassName } = useModalStyleProps();
  const dialogProps = {
    className: modalDialogClassName,
  };

  return createElement('div', dialogProps, children);
};

export default ModalDialog;
