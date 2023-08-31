import React from 'react';
import { Checkbox } from '../../Checkbox';

const HeaderExperimentalRTL = () => {
  const toggleRtl = () => {
    const htmlElement = document.querySelector('html');

    if (htmlElement?.hasAttribute('dir')) {
      htmlElement?.removeAttribute('dir');
    } else {
      htmlElement?.setAttribute('dir', 'rtl');
    }
  };

  return <Checkbox id="rtl" label="Switch writing mode to RTL" onChange={toggleRtl} />;
};

export default HeaderExperimentalRTL;
