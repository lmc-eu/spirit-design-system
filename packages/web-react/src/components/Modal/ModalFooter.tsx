import { FC, createElement } from 'react';
import { SpiritModalFooterProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

const ModalFooter: FC<SpiritModalFooterProps> = (props) => {
  const { children, UNSAFE_style, UNSAFE_className } = props;

  const modalFooterClass = useClassNamePrefix('Modal__footer');
  const headerProps = {
    className: [modalFooterClass, UNSAFE_className].join(' '),
    style: UNSAFE_style,
  };

  return createElement('div', headerProps, children);
};

export default ModalFooter;
