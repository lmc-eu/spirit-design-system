/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CheckPlainIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const CheckPlainIcon: React.FC<CheckPlainIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M9.00012 16.5446L5.50012 13.0446C5.11012 12.6546 4.49012 12.6546 4.10012 13.0446C3.71012 13.4346 3.71012 14.0546 4.10012 14.4446L8.29012 18.6346C8.68012 19.0246 9.31012 19.0246 9.70012 18.6346L20.3001 8.04455C20.6901 7.65455 20.6901 7.03455 20.3001 6.64455C19.9101 6.25455 19.2901 6.25455 18.9001 6.64455L9.00012 16.5446Z"
      fill="currentColor" />
  </svg>
);
CheckPlainIcon.displayName = 'CheckPlainIcon';
export default CheckPlainIcon;
/* tslint:enable */
/* eslint-enable */
