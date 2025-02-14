'use client';

import classNames from 'classnames';
import React from 'react';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { HeaderProps } from '../../types';
import { HEADER_COLOR_DEFAULT } from './constants';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const Header = (props: HeaderProps) => {
  const { children, color = HEADER_COLOR_DEFAULT, isSimple, ...restProps } = props;

  const { classProps } = useHeaderStyleProps({ color, isSimple });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useDeprecationMessage({
    method: 'custom',
    trigger: true,
    componentName: 'Header',
    customText: `The component will be removed in the next major version. Component is replaced by the current implementation of UNSTABLE_Header.
    Please see the composition of the UNSTABLE_Header, Drawer and Navigation components.`,
  });

  return (
    <header {...otherProps} className={classNames(classProps.root, styleProps.className)} style={styleProps.style}>
      {children}
    </header>
  );
};

export default Header;
