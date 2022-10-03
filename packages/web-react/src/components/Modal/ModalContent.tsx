import { createElement } from 'react';
import { SpiritModalContentProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

const ModalContent = (props: SpiritModalContentProps) => {
  const { children, UNSAFE_style, UNSAFE_className } = props;

  const modalContentClass = useClassNamePrefix('Modal__content');
  const contentProps = {
    className: [modalContentClass, UNSAFE_className].join(' '),
    style: UNSAFE_style,
  };

  return createElement('div', contentProps, children);
};

export default ModalContent;
