/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface WarningIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const WarningIcon: React.FC<WarningIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M2.72992 21.0001H21.2599C22.0299 21.0001 22.5099 20.1701 22.1299 19.5001L12.8599 3.50006C12.4699 2.83006 11.5099 2.83006 11.1299 3.50006L1.85992 19.5001C1.47992 20.1701 1.95992 21.0001 2.72992 21.0001ZM12.9999 18.0001H10.9999V16.0001H12.9999V18.0001ZM11.9999 14.0001C11.4499 14.0001 10.9999 13.5501 10.9999 13.0001V11.0001C10.9999 10.4501 11.4499 10.0001 11.9999 10.0001C12.5499 10.0001 12.9999 10.4501 12.9999 11.0001V13.0001C12.9999 13.5501 12.5499 14.0001 11.9999 14.0001Z"
      fill="currentColor" />
  </svg>
);
WarningIcon.displayName = 'WarningIcon';
export default WarningIcon;
/* tslint:enable */
/* eslint-enable */
