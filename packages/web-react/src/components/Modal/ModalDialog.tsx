import { createElement } from 'react';
import { SpiritModalDialogProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

const ModalDialog = (props: SpiritModalDialogProps) => {
  const { children, UNSAFE_style, UNSAFE_className } = props;

  const modalDialogClass = useClassNamePrefix('Modal__dialog');
  const dialogProps = {
    className: [modalDialogClass, UNSAFE_className].join(' '),
    style: UNSAFE_style,
  };

  return createElement('div', dialogProps, children);
};

export default ModalDialog;
