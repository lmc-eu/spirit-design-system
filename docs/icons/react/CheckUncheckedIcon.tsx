/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CheckUncheckedIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const CheckUncheckedIcon: React.FC<CheckUncheckedIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor" />
  </svg>
);
CheckUncheckedIcon.displayName = 'CheckUncheckedIcon';
export default CheckUncheckedIcon;
/* tslint:enable */
/* eslint-enable */
