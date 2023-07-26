/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface WarningIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const WarningIcon: React.FC<WarningIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M2.73 21.0001H21.26C22.03 21.0001 22.51 20.1701 22.13 19.5001L12.86 3.50006C12.47 2.83006 11.51 2.83006 11.13 3.50006L1.86 19.5001C1.48 20.1701 1.96 21.0001 2.73 21.0001ZM13 18.0001H11V16.0001H13V18.0001ZM12 14.0001C11.45 14.0001 11 13.5501 11 13.0001V11.0001C11 10.4501 11.45 10.0001 12 10.0001C12.55 10.0001 13 10.4501 13 11.0001V13.0001C13 13.5501 12.55 14.0001 12 14.0001Z"
      fill="currentColor" />
  </svg>
);
WarningIcon.displayName = 'WarningIcon';
export default WarningIcon;
/* tslint:enable */
/* eslint-enable */
