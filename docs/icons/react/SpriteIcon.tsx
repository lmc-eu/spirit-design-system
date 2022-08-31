/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SpriteIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const SpriteIcon: React.FC<SpriteIconProps> = ({size, ...props}) => (
  <svg fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    null
  </svg>
);
SpriteIcon.displayName = 'SpriteIcon';
export default SpriteIcon;
/* tslint:enable */
/* eslint-enable */
