import classNames from 'classnames';
import React from 'react';
import { Button } from '../Button';
import { useHeader } from './useHeader';
import { filterProps } from '../../utils/filterProps';

const NavbarToggler = (props: unknown): JSX.Element => {
  const { id, headerClass, handleToggle, isExpanded } = useHeader();
  const navbarTogglerClass = `${headerClass}__mobileOnlyActions`;
  const headerIconClass = `${headerClass}__icon`;
  const headerIconMenuClass = `${headerClass}__icon--menu`;

  return (
    <div {...filterProps(props)} className={navbarTogglerClass}>
      <Button color="inverted" isSquare aria-expanded={isExpanded} aria-controls={id} onClick={handleToggle}>
        <span className={classNames(headerIconClass, headerIconMenuClass)} aria-hidden="true" />
        <span className="accessibility-hidden">Menu</span>
      </Button>
    </div>
  );
};

export default NavbarToggler;
