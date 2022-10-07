import { FC, createElement } from 'react';
import classNames from 'classnames';
import { SpiritModalHeaderProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { useModalStyleProps } from './useModalStyleProps';

const ModalHeader: FC<SpiritModalHeaderProps> = ({ children, ...rest }) => {
  const { modalHeaderClassName } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps({ ...rest });
  const headerProps = {
    ...otherProps,
    className: classNames(modalHeaderClassName, styleProps.className),
    style: {
      justifyContent: 'space-between', // TODO: TO BE FIXED IN CSS?
      ...styleProps.style,
    },
  };

  return createElement('div', headerProps, children);
};

export default ModalHeader;
