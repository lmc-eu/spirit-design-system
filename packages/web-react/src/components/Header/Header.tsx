import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderModernProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';
import { HEADER_COLOR_DEFAULT } from './const';

const Header = (props: HeaderModernProps) => {
  const { children, color = HEADER_COLOR_DEFAULT, isSimple, ...restProps } = props;

  const { classProps } = useHeaderModernStyleProps({ color, isSimple });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <header className={classNames(classProps.root, styleProps.className)} style={styleProps.style} {...otherProps}>
      {children}
    </header>
  );
};

export default Header;
