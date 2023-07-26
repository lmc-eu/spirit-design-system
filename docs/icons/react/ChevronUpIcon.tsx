/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ChevronUpIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M11.29 9.05471L6.69997 13.6447C6.30997 14.0347 6.30997 14.6647 6.69997 15.0547C7.08997 15.4447 7.71997 15.4447 8.10997 15.0547L12 11.1747L15.88 15.0547C16.27 15.4447 16.9 15.4447 17.29 15.0547C17.68 14.6647 17.68 14.0347 17.29 13.6447L12.7 9.05471C12.32 8.66471 11.68 8.66471 11.29 9.05471Z"
      fill="currentColor" />
  </svg>
);
ChevronUpIcon.displayName = 'ChevronUpIcon';
export default ChevronUpIcon;
/* tslint:enable */
/* eslint-enable */
