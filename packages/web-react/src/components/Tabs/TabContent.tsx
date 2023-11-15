import React from 'react';
import { useStyleProps } from '../../hooks';
import { ChildrenProps, TransferProps } from '../../types';

export type TabContentProps = ChildrenProps & TransferProps;

const TabContent = ({ children, ...restProps }: TabContentProps): JSX.Element => {
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <div {...transferProps} {...styleProps}>
      {children}
    </div>
  );
};

export default TabContent;
