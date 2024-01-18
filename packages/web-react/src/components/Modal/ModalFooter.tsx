import React from 'react';
import classNames from 'classnames';
import { AlignmentX } from '../../constants';
import { useStyleProps } from '../../hooks';
import { ModalFooterProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';

const ModalFooter = (props: ModalFooterProps) => {
  const { children, alignmentX = AlignmentX.RIGHT, description, ...restProps } = props;

  const { classProps } = useModalStyleProps({ footerAlignment: alignmentX });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <footer {...otherProps} {...styleProps} className={classNames(classProps.footer.root, styleProps.className)}>
      {description && <div className={classProps.footer.description}>{description}</div>}
      <div className={classProps.footer.actions}>{children}</div>
    </footer>
  );
};

export default ModalFooter;
