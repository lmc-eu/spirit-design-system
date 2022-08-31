/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ChevronLeftIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M14.71 7.05471C14.32 6.66471 13.69 6.66471 13.3 7.05471L8.70998 11.6447C8.31998 12.0347 8.31998 12.6647 8.70998 13.0547L13.3 17.6447C13.69 18.0347 14.32 18.0347 14.71 17.6447C15.1 17.2547 15.1 16.6247 14.71 16.2347L10.83 12.3447L14.71 8.46471C15.1 8.07471 15.09 7.43471 14.71 7.05471Z"
      fill="currentColor" />
  </svg>
);
ChevronLeftIcon.displayName = 'ChevronLeftIcon';
export default ChevronLeftIcon;
/* tslint:enable */
/* eslint-enable */
