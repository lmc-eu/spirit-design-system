/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoreIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MoreIcon: React.FC<MoreIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
      fill="currentColor" />
  </svg>
);
MoreIcon.displayName = 'MoreIcon';
export default MoreIcon;
/* tslint:enable */
/* eslint-enable */
