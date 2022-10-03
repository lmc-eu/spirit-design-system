import { FC, createElement } from 'react';
import { SpiritModalBodyProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

const ModalBody: FC<SpiritModalBodyProps> = (props) => {
  const { children, UNSAFE_style, UNSAFE_className } = props;

  const modalBodyClass = useClassNamePrefix('Modal__body');
  const bodyProps = {
    className: [modalBodyClass, UNSAFE_className].join(' '),
    style: UNSAFE_style,
  };

  return createElement('div', bodyProps, children);
};

export default ModalBody;
