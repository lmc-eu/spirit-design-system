/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface LogoYoutubeColoredIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const LogoYoutubeColoredIcon: React.FC<LogoYoutubeColoredIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M23.7609 7.64219C23.7609 7.64219 23.5266 5.9875 22.8047 5.26094C21.8906 4.30469 20.8688 4.3 20.4 4.24375C17.0438 4 12.0047 4 12.0047 4H11.9953C11.9953 4 6.95625 4 3.6 4.24375C3.13125 4.3 2.10938 4.30469 1.19531 5.26094C0.473438 5.9875 0.24375 7.64219 0.24375 7.64219C0.24375 7.64219 0 9.5875 0 11.5281V13.3469C0 15.2875 0.239062 17.2328 0.239062 17.2328C0.239062 17.2328 0.473437 18.8875 1.19062 19.6141C2.10469 20.5703 3.30469 20.5375 3.83906 20.6406C5.76094 20.8234 12 20.8797 12 20.8797C12 20.8797 17.0438 20.8703 20.4 20.6313C20.8688 20.575 21.8906 20.5703 22.8047 19.6141C23.5266 18.8875 23.7609 17.2328 23.7609 17.2328C23.7609 17.2328 24 15.2922 24 13.3469V11.5281C24 9.5875 23.7609 7.64219 23.7609 7.64219Z"
      fill="currentColor" />
    <path d="M9.56934 15.5687V8.4314L15.8421 12L9.56934 15.5687Z" fill="currentColor" />
  </svg>
);
LogoYoutubeColoredIcon.displayName = 'LogoYoutubeColoredIcon';
export default LogoYoutubeColoredIcon;
/* tslint:enable */
/* eslint-enable */
