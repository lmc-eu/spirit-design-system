import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderDialogButtonProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderDialogButton = (props: HeaderDialogButtonProps) => {
  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <button
      type="button"
      className={classNames(classProps.headerDialogButton, styleProps.className)}
      style={styleProps.style}
      {...otherProps}
    />
  );
};

export default HeaderDialogButton;
