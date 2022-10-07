import { FC, createElement } from 'react';
import classNames from 'classnames';
import { SpiritModalBodyProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { useModalStyleProps } from './useModalStyleProps';

const ModalBody: FC<SpiritModalBodyProps> = ({ children, ...rest }) => {
  const { modalBodyClassName } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps({ ...rest });
  const bodyProps = {
    ...styleProps,
    ...otherProps,
    className: classNames(modalBodyClassName, styleProps.className),
  };

  return createElement('div', bodyProps, children);
};

export default ModalBody;
