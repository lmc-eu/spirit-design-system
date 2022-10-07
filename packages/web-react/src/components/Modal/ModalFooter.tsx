import { FC, createElement } from 'react';
import classNames from 'classnames';
import { SpiritModalFooterProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { useModalStyleProps } from './useModalStyleProps';

const ModalFooter: FC<SpiritModalFooterProps> = ({ children, ...rest }) => {
  const { modalFooterClassName } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps({ ...rest });
  const headerProps = {
    ...styleProps,
    ...otherProps,
    className: classNames(modalFooterClassName, styleProps.className),
  };

  return createElement('div', headerProps, children);
};

export default ModalFooter;
