import { FC, createElement } from 'react';
import { SpiritModalFooterProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';

const ModalFooter: FC<SpiritModalFooterProps> = ({ children, ...rest }) => {
  const { modalFooterClassName } = useModalStyleProps();
  const headerProps = {
    className: modalFooterClassName,
  };

  return createElement('div', headerProps, children);
};

export default ModalFooter;
