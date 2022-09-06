import classNames from 'classnames';
import React from 'react';
import { Icon } from '../Icon';
import { useHeader } from './useHeader';
import { useStyleProps } from '../../hooks/styleProps';
import { StyleProps } from '../../types';

const NavbarClose = (props: unknown): JSX.Element => {
  const { id, headerClass, isExpanded, handleToggle } = useHeader();
  const navbarCloseClass = `${headerClass}__close`;
  const { styleProps, props: otherProps } = useStyleProps(props as StyleProps);

  return (
    <button
      {...otherProps}
      {...styleProps}
      type="button"
      className={classNames(navbarCloseClass, styleProps.className)}
      aria-controls={id}
      aria-expanded={isExpanded}
      onClick={handleToggle}
    >
      <Icon name="close" />
      <span className="accessibility-hidden">Close</span>
    </button>
  );
};

export default NavbarClose;
