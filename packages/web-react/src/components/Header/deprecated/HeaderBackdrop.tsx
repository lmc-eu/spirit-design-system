import React from 'react';
import { useHeader } from './useHeader';

const HeaderBackdrop = (): JSX.Element => {
  const { headerClass, handleToggle } = useHeader();
  const headerBackdropClass = `${headerClass}__backdrop`;

  //  Simply handle closing by click on Backdrop component
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
  return <div className={headerBackdropClass} onClick={handleToggle} />;
};

export default HeaderBackdrop;
