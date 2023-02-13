import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ModalComposedFooterProps } from '../../types/modalComposed';
import { useModalComposedStyleProps } from './useModalComposedStyleProps';

const ModalComposedFooter = (props: ModalComposedFooterProps) => {
  const { children, align = 'right', description, ...restProps } = props;

  const { classProps } = useModalComposedStyleProps({ footerAlign: align });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <footer {...otherProps} {...styleProps} className={classNames(classProps.footer.root, styleProps.className)}>
      {description && <div className={classProps.footer.description}>{description}</div>}
      <div className={classProps.footer.actions}>{children}</div>
    </footer>
  );
};

export default ModalComposedFooter;
