import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { HeaderButtonProps } from '../../types';
import { useHeaderModernStyleProps } from './useHeaderStyleProps';

const HeaderButton = (props: HeaderButtonProps) => {
  const { classProps } = useHeaderModernStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <button
      type="button"
      className={classNames(classProps.headerButton, styleProps.className)}
      style={styleProps.style}
      {...otherProps}
    />
  );
};

export default HeaderButton;
