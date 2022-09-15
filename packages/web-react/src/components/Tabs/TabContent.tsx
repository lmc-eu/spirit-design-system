import React from 'react';
import { ChildrenProps, TransferProps } from '../../types';

type TabContentProps = ChildrenProps & TransferProps;

const TabContent = ({ children }: TabContentProps): JSX.Element => <div>{children}</div>;

export default TabContent;
