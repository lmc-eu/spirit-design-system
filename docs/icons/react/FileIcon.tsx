/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface FileIconProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const FileIcon: React.FC<FileIconProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M6 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 20V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 6 2h7.175a1.975 1.975 0 0 1 1.4.575l4.85 4.85a1.975 1.975 0 0 1 .575 1.4V20c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 22H6Zm6-13V4H6v16h12V10h-5a.968.968 0 0 1-.713-.287A.967.967 0 0 1 12 9Z"
      fill="currentColor" />
  </svg>
);
FileIcon.displayName = 'FileIcon';
export default FileIcon;
/* tslint:enable */
/* eslint-enable */
