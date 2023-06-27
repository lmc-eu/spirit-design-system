import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';
import { HEADER_COLOR_DEFAULT } from './constants';

const Header = (props: HeaderProps) => {
  const { children, color = HEADER_COLOR_DEFAULT, isSimple, ...restProps } = props;

  const { classProps } = useHeaderStyleProps({ color, isSimple });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <header {...otherProps} className={classNames(classProps.root, styleProps.className)} style={styleProps.style}>
      {children}
    </header>
  );
};

export default Header;
