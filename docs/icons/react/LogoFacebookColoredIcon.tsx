/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface LogoFacebookColoredIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const LogoFacebookColoredIcon: React.FC<LogoFacebookColoredIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M24 12C24 5.373 18.627 0 12 0C5.373 0 0 5.373 0 12C0 17.99 4.388 22.954 10.125 23.854V15.47H7.078V12H10.125V9.356C10.125 6.349 11.917 4.688 14.658 4.688C15.97 4.688 17.344 4.922 17.344 4.922V7.875H15.83C14.339 7.875 13.874 8.8 13.874 9.75V12H17.202L16.67 15.469H13.874V23.854C19.612 22.954 24 17.99 24 12Z"
      fill="currentColor" />
  </svg>
);
LogoFacebookColoredIcon.displayName = 'LogoFacebookColoredIcon';
export default LogoFacebookColoredIcon;
/* tslint:enable */
/* eslint-enable */
