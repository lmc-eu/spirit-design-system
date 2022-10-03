import { createElement } from 'react';
import { SpiritModalBackdropProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

const ModalBackdrop = (props: SpiritModalBackdropProps) => {
  const { onClick, closeOnBackdrop, UNSAFE_style, UNSAFE_className } = props;

  const modalBackdropClass = useClassNamePrefix('Modal__backdrop');
  const backdropProps = {
    onClick: closeOnBackdrop ? onClick : null,
    className: [modalBackdropClass, UNSAFE_className].join(' '),
    style: UNSAFE_style,
  };

  return createElement('div', backdropProps);
};

export default ModalBackdrop;
