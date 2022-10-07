import React, { createElement } from 'react';
import { SpiritModalCloseButtonProps } from '../../types';
import { Icon } from '../Icon';
import { useModalStyleProps } from './useModalStyleProps';

const ModalCloseButton = (props: SpiritModalCloseButtonProps) => {
  const { UNSAFE_style, UNSAFE_className, ...rest } = props;

  const { modalCloseButtonClassName } = useModalStyleProps();
  const buttonProps = {
    role: 'button',
    className: [
      'Button',
      'Button--tertiary',
      'Button--square',
      'Button--medium',
      modalCloseButtonClassName,
      UNSAFE_className,
    ].join(' '),
    style: UNSAFE_style,
    ...rest,
  };

  return createElement(
    'button',
    {
      type: 'button',
      ...buttonProps,
    },
    <>
      <Icon name="close" />
      <span className="accessibility-hidden">Close</span>
    </>,
  );
};

export default ModalCloseButton;
