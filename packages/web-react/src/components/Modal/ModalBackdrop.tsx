import { createElement } from 'react';
import { SpiritModalBackdropProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';

const ModalBackdrop = ({ onClick, closeOnBackdrop }: SpiritModalBackdropProps) => {
  const { modalBackdropClassName } = useModalStyleProps();
  const backdropProps = {
    onClick: closeOnBackdrop ? onClick : null,
    className: modalBackdropClassName,
  };

  return createElement('div', backdropProps);
};

export default ModalBackdrop;
