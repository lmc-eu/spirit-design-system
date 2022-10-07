import { createElement } from 'react';
import { SpiritModalContentProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';

const ModalContent = (props: SpiritModalContentProps) => {
  const { children } = props;

  const { modalContentClassName } = useModalStyleProps();
  const contentProps = {
    className: modalContentClassName,
  };

  return createElement('div', contentProps, children);
};

export default ModalContent;
