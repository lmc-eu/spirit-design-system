/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ToggleOnIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ToggleOnIcon: React.FC<ToggleOnIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M17 7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM17 15C15.34 15 14 13.66 14 12C14 10.34 15.34 9 17 9C18.66 9 20 10.34 20 12C20 13.66 18.66 15 17 15Z"
      fill="currentColor" />
  </svg>
);
ToggleOnIcon.displayName = 'ToggleOnIcon';
export default ToggleOnIcon;
/* tslint:enable */
/* eslint-enable */
