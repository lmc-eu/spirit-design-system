/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface WarningIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const WarningIcon: React.FC<WarningIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M12 21.9991C17.5228 21.9991 22 17.522 22 11.9991C22 6.4763 17.5228 1.99915 12 1.99915C6.47715 1.99915 2 6.4763 2 11.9991C2 17.522 6.47715 21.9991 12 21.9991ZM12 12C11.45 12 11 11.55 11 11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11C13 11.55 12.55 12 12 12ZM13 14V16H11V14H13Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
WarningIcon.displayName = 'WarningIcon';
export default WarningIcon;
/* tslint:enable */
/* eslint-enable */
