import classNames from 'classnames';
import React from 'react';
import { useHeader } from './useHeader';

const NavbarClose = (): JSX.Element => {
  const { id, headerClass } = useHeader();
  const navbarCloseClass = `${headerClass}__close`;
  const headerIconClass = `${headerClass}__icon`;
  const headerIconCloseClass = `${headerClass}__icon--close`;

  return (
    <button type="button" className={navbarCloseClass} aria-controls={id} aria-expanded="false">
      <span className={classNames(headerIconClass, headerIconCloseClass)} aria-hidden="true" />
      <span className="accessibility-hidden">Close</span>
    </button>
  );
};

export default NavbarClose;
