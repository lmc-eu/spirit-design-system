import { FC, createElement } from 'react';
import { SpiritModalHeaderProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';

const ModalHeader: FC<SpiritModalHeaderProps> = (props) => {
  const { children, UNSAFE_style, UNSAFE_className } = props;

  const modalHeaderClass = useClassNamePrefix('Modal__header');
  const headerProps = {
    className: [modalHeaderClass, UNSAFE_className].join(' '),
    style: {
      justifyContent: 'space-between', // TODO: TO BE FIXED IN CSS?
      ...UNSAFE_style,
    },
  };

  return createElement('div', headerProps, children);
};

export default ModalHeader;
