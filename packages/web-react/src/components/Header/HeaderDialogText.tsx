'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderDialogTextProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderDialogText = (props: HeaderDialogTextProps) => {
  const { classProps } = useHeaderStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <span
      {...otherProps}
      className={classNames(classProps.headerDialogText, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderDialogText;
