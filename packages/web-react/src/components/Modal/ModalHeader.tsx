import { FC, createElement } from 'react';
import { SpiritModalHeaderProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';

const ModalHeader: FC<SpiritModalHeaderProps> = ({ children, ...rest }) => {
  const { modalHeaderClassName } = useModalStyleProps();
  const headerProps = {
    className: modalHeaderClassName,
    style: {
      justifyContent: 'space-between', // TODO: TO BE FIXED IN CSS?
    },
  };

  return createElement('div', headerProps, children);
};

export default ModalHeader;
