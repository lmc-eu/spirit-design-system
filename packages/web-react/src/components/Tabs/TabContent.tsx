'use client';

import React from 'react';
import { useStyleProps } from '../../hooks';
import { type TabContentProps } from '../../types';

const TabContent = ({ children, ...restProps }: TabContentProps): JSX.Element => {
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <div {...transferProps} {...styleProps}>
      {children}
    </div>
  );
};

TabContent.spiritComponent = 'TabContent';

export default TabContent;
