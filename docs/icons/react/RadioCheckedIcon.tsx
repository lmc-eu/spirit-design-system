/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface RadioCheckedIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const RadioCheckedIcon: React.FC<RadioCheckedIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
      fill="currentColor" />
  </svg>
);
RadioCheckedIcon.displayName = 'RadioCheckedIcon';
export default RadioCheckedIcon;
/* tslint:enable */
/* eslint-enable */
