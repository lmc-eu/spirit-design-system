import React from 'react';
import { useHeader } from './useHeader';

const HeaderBackdrop = (): JSX.Element => {
  const { headerClass } = useHeader();
  const headerBackdropClass = `${headerClass}__backdrop`;

  return <div className={headerBackdropClass} />;
};

export default HeaderBackdrop;
