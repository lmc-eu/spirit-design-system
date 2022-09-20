/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ChevronDownIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M15.88 9.63472L12 13.5147L8.11998 9.63472C7.72998 9.24472 7.09998 9.24472 6.70998 9.63472C6.31998 10.0247 6.31998 10.6547 6.70998 11.0447L11.3 15.6347C11.69 16.0247 12.32 16.0247 12.71 15.6347L17.3 11.0447C17.69 10.6547 17.69 10.0247 17.3 9.63472C16.91 9.25472 16.27 9.24472 15.88 9.63472Z"
      fill="currentColor" />
  </svg>
);
ChevronDownIcon.displayName = 'ChevronDownIcon';
export default ChevronDownIcon;
/* tslint:enable */
/* eslint-enable */
