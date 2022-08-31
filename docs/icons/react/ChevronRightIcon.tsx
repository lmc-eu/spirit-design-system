/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ChevronRightIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M9.29006 7.0545C8.90006 7.4445 8.90006 8.0745 9.29006 8.4645L13.1701 12.3445L9.29006 16.2245C8.90006 16.6145 8.90006 17.2445 9.29006 17.6345C9.68006 18.0245 10.3101 18.0245 10.7001 17.6345L15.2901 13.0445C15.6801 12.6545 15.6801 12.0245 15.2901 11.6345L10.7001 7.0445C10.3201 6.6645 9.68006 6.6645 9.29006 7.0545Z"
      fill="currentColor" />
  </svg>
);
ChevronRightIcon.displayName = 'ChevronRightIcon';
export default ChevronRightIcon;
/* tslint:enable */
/* eslint-enable */
