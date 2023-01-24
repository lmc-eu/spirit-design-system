/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ChevronLeftIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M14.7105 7.05471C14.3205 6.66471 13.6905 6.66471 13.3005 7.05471L8.71047 11.6447C8.32047 12.0347 8.32047 12.6647 8.71047 13.0547L13.3005 17.6447C13.6905 18.0347 14.3205 18.0347 14.7105 17.6447C15.1005 17.2547 15.1005 16.6247 14.7105 16.2347L10.8305 12.3447L14.7105 8.46471C15.1005 8.07471 15.0905 7.43471 14.7105 7.05471Z"
      fill="currentColor" />
  </svg>
);
ChevronLeftIcon.displayName = 'ChevronLeftIcon';
export default ChevronLeftIcon;
/* tslint:enable */
/* eslint-enable */
