import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderDialogNavProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderDialogNav = (props: HeaderDialogNavProps) => {
  const { classProps } = useHeaderStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <ul
      {...otherProps}
      className={classNames(classProps.headerDialogNav, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderDialogNav;
