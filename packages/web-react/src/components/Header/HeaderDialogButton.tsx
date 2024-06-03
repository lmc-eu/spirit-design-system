import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderDialogButtonProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderDialogButton = (props: HeaderDialogButtonProps) => {
  const { classProps } = useHeaderStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(classProps.headerDialogButton, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderDialogButton;
