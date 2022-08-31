/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface InfoIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const InfoIcon: React.FC<InfoIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor" />
  </svg>
);
InfoIcon.displayName = 'InfoIcon';
export default InfoIcon;
/* tslint:enable */
/* eslint-enable */
