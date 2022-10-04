/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { createElement } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { SpiritModalCloseButtonProps } from '../../types';
import { IconsProvider } from '../../context';
import { useClassNamePrefix } from '../../hooks';
import { Icon } from '../Icon';

const ModalCloseButton = (props: SpiritModalCloseButtonProps) => {
  const { UNSAFE_style, UNSAFE_className, ...rest } = props;

  const modalCloseClass = useClassNamePrefix('Modal__close');
  const buttonProps = {
    role: 'button',
    className: [
      'Button',
      'Button--tertiary',
      'Button--square',
      'Button--medium',
      modalCloseClass,
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
      <IconsProvider value={icons}>
        <Icon name="close" />
      </IconsProvider>
      <span className="accessibility-hidden">Close</span>
    </>,
  );
};

export default ModalCloseButton;
