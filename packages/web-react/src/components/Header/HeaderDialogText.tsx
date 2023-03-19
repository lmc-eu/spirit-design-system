import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderDialogTextProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderDialogText = (props: HeaderDialogTextProps) => {
  const { classProps } = useHeaderModernStyleProps();
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
