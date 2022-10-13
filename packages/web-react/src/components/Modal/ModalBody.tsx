import { FC, createElement } from 'react';
import { SpiritModalBodyProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';

const ModalBody: FC<SpiritModalBodyProps> = ({ children, ...rest }) => {
  const { modalBodyClassName } = useModalStyleProps();
  const bodyProps = {
    className: modalBodyClassName,
  };

  return createElement('div', bodyProps, children);
};

export default ModalBody;
