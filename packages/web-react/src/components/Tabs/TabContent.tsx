import React from 'react';
import { ChildrenProps, TransferProps } from '../../types';

type TabContentProps = ChildrenProps & TransferProps;

const TabContent = ({ children, ...restProps }: TabContentProps): JSX.Element => <div {...restProps}>{children}</div>;

export default TabContent;
