/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CheckIndeterminateIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const CheckIndeterminateIcon: React.FC<CheckIndeterminateIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12Z"
      fill="currentColor" />
  </svg>
);
CheckIndeterminateIcon.displayName = 'CheckIndeterminateIcon';
export default CheckIndeterminateIcon;
/* tslint:enable */
/* eslint-enable */
