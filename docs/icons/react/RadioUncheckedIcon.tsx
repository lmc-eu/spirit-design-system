/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface RadioUncheckedIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const RadioUncheckedIcon: React.FC<RadioUncheckedIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
      fill="currentColor" />
  </svg>
);
RadioUncheckedIcon.displayName = 'RadioUncheckedIcon';
export default RadioUncheckedIcon;
/* tslint:enable */
/* eslint-enable */
