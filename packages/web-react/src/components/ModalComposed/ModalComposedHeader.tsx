import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ModalComposedHeaderProps } from '../../types/modalComposed';
import { useModalComposedStyleProps } from './useModalComposedStyleProps';
import { useModalContext } from './ModalComposedContext';
import { Button } from '../Button';
import { Icon } from '../Icon';

const ModalComposedHeader = (props: ModalComposedHeaderProps) => {
  const { children, closeLabel = 'Close', ...restProps } = props;

  const { classProps } = useModalComposedStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const { id, isOpen, onClose } = useModalContext();

  return (
    <header {...otherProps} {...styleProps} className={classNames(classProps.header, styleProps.className)}>
      {children && (
        <h2 id={`${id}__title`} className={classProps.title}>
          {children}
        </h2>
      )}
      <Button isSquare color="tertiary" onClick={onClose} aria-expanded={isOpen} aria-controls={id}>
        <Icon name="close" />
        <span className="accessibility-hidden">{closeLabel}</span>
      </Button>
    </header>
  );
};

export default ModalComposedHeader;
