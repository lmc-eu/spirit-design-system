import classNames from 'classnames';
import React from 'react';
import { useHeader } from './useHeader';
import { filterProps } from '../../utils/filterProps';

const NavbarClose = (props: unknown): JSX.Element => {
  const { id, headerClass, isExpanded, handleToggle } = useHeader();
  const navbarCloseClass = `${headerClass}__close`;
  const headerIconClass = `${headerClass}__icon`;
  const headerIconCloseClass = `${headerClass}__icon--close`;

  return (
    <button
      {...filterProps(props)}
      type="button"
      className={navbarCloseClass}
      aria-controls={id}
      aria-expanded={isExpanded}
      onClick={handleToggle}
    >
      <span className={classNames(headerIconClass, headerIconCloseClass)} aria-hidden="true" />
      <span className="accessibility-hidden">Close</span>
    </button>
  );
};

export default NavbarClose;
