import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ClickEvent, ModalHeaderProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';
import { useModalContext } from './ModalContext';
import { Button } from '../Button';
import { Icon } from '../Icon';

const ModalHeader = (props: ModalHeaderProps) => {
  const { children, closeLabel = 'Close', ...restProps } = props;

  const { classProps } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const { id, isOpen, onClose } = useModalContext();

  return (
    <header {...otherProps} {...styleProps} className={classNames(classProps.header, styleProps.className)}>
      {children && (
        <h2 id={`${id}__title`} className={classProps.title}>
          {children}
        </h2>
      )}
      <Button
        isSquare
        color="tertiary"
        onClick={(event: ClickEvent) => {
          onClose(event);
        }}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <Icon name="close" />
        <span className="accessibility-hidden">{closeLabel}</span>
      </Button>
    </header>
  );
};

export default ModalHeader;
