/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ToggleOffIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ToggleOffIcon: React.FC<ToggleOffIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M17 7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM7 15C5.34 15 4 13.66 4 12C4 10.34 5.34 9 7 9C8.66 9 10 10.34 10 12C10 13.66 8.66 15 7 15Z"
      fill="currentColor" />
  </svg>
);
ToggleOffIcon.displayName = 'ToggleOffIcon';
export default ToggleOffIcon;
/* tslint:enable */
/* eslint-enable */
