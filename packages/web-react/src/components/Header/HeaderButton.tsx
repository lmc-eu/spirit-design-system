import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { HeaderButtonProps } from '../../types';
import { useHeaderStyleProps } from './useHeaderStyleProps';

const HeaderButton = (props: HeaderButtonProps) => {
  const { classProps } = useHeaderStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(props);

  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(classProps.headerButton, styleProps.className)}
      style={styleProps.style}
    />
  );
};

export default HeaderButton;
