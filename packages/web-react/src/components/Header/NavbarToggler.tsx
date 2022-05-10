import classNames from 'classnames';
import React from 'react';
import { Button } from '../Button';
import { useHeader } from './useHeader';
import { useStyleProps } from '../../hooks/styleProps';
import { StyleProps } from '../../types';

const NavbarToggler = (props: unknown): JSX.Element => {
  const { id, headerClass, handleToggle, isExpanded } = useHeader();
  const navbarTogglerClass = `${headerClass}__mobileOnlyActions`;
  const headerIconClass = `${headerClass}__icon`;
  const headerIconMenuClass = `${headerClass}__icon--menu`;
  const { styleProps, props: otherProps } = useStyleProps(props as StyleProps);

  return (
    <div {...otherProps} {...styleProps} className={classNames(navbarTogglerClass, styleProps.className)}>
      <Button color="inverted" isSquare aria-expanded={isExpanded} aria-controls={id} onClick={handleToggle}>
        <span className={classNames(headerIconClass, headerIconMenuClass)} aria-hidden="true" />
        <span className="accessibility-hidden">Menu</span>
      </Button>
    </div>
  );
};

export default NavbarToggler;
