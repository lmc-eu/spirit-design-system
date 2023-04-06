import React from 'react';
import classNames from 'classnames';
import { useStyleProps, useDeprecationMessage } from '../../hooks';
import { HeaderModernProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';
import { HEADER_COLOR_DEFAULT } from './constants';

const Header = (props: HeaderModernProps) => {
  const { children, color = HEADER_COLOR_DEFAULT, isSimple, ...restProps } = props;

  const { classProps } = useHeaderModernStyleProps({ color, isSimple });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useDeprecationMessage({
    method: 'component',
    trigger: true,
    componentName: 'HeaderModern',
    componentProps: {
      newName: 'Header',
    },
  });

  return (
    <header {...otherProps} className={classNames(classProps.root, styleProps.className)} style={styleProps.style}>
      {children}
    </header>
  );
};

export default Header;
