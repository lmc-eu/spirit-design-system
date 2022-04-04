import classNames from 'classnames';
import React from 'react';
import { Button } from '../Button';
import { useHeader } from './useHeader';

const NavbarToggler = (): JSX.Element => {
  const { id, headerClass } = useHeader();
  const navbarTogglerClass = `${headerClass}__mobileOnlyActions`;
  const headerIconClass = `${headerClass}__icon`;
  const headerIconMenuClass = `${headerClass}__icon--menu`;

  return (
    <div className={navbarTogglerClass}>
      <Button color="inverted" isSquare aria-expanded="false" aria-controls={id}>
        <span className={classNames(headerIconClass, headerIconMenuClass)} aria-hidden="true" />
        <span className="accessibility-hidden">Menu</span>
      </Button>
    </div>
  );
};

export default NavbarToggler;
