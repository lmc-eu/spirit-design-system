import classNames from 'classnames';
import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useHeader } from './useHeader';
import { useStyleProps } from '../../hooks/styleProps';
import { StyleProps } from '../../types';

const NavbarToggler = (props: unknown): JSX.Element => {
  const { id, headerClass, handleToggle, isExpanded } = useHeader();
  const navbarTogglerClass = `${headerClass}__mobileOnlyActions`;
  const { styleProps, props: otherProps } = useStyleProps(props as StyleProps);

  return (
    <div {...otherProps} {...styleProps} className={classNames(navbarTogglerClass, styleProps.className)}>
      <Button color="inverted" isSquare aria-expanded={isExpanded} aria-controls={id} onClick={handleToggle}>
        <Icon name="hamburger" />
        <span className="accessibility-hidden">Menu</span>
      </Button>
    </div>
  );
};

export default NavbarToggler;
