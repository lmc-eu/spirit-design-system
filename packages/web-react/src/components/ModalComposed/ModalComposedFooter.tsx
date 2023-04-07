import React from 'react';
import classNames from 'classnames';
import { useStyleProps, useDeprecationMessage } from '../../hooks';
import { ModalComposedFooterProps } from '../../types';
import { useModalComposedStyleProps } from './useModalComposedStyleProps';

const ModalComposedFooter = (props: ModalComposedFooterProps) => {
  const { children, alignmentX = 'right', align = 'right', description, ...restProps } = props;

  const { classProps } = useModalComposedStyleProps({ footerAlignment: alignmentX || align });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useDeprecationMessage({
    method: 'property',
    trigger: !!align,
    componentName: 'ModalComposedFooter',
    propertyProps: {
      deprecatedName: 'align',
      newName: 'alignmentX',
    },
  });

  return (
    <footer {...otherProps} {...styleProps} className={classNames(classProps.footer.root, styleProps.className)}>
      {description && <div className={classProps.footer.description}>{description}</div>}
      <div className={classProps.footer.actions}>{children}</div>
    </footer>
  );
};

export default ModalComposedFooter;
