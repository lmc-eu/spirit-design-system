import React, { ReactNode } from 'react';
import { SizesDictionaryType } from '../src/types';

interface DocsBoxProps {
  children: ReactNode;
  size?: SizesDictionaryType;
}

const defaultProps = {
  size: 'medium',
};

const DocsBox = ({ children, size }: DocsBoxProps) => {
  const sizeClass = size ? `docs-Box--${size}` : '';

  return <div className={`docs-Box ${sizeClass}`}>{children}</div>;
};

DocsBox.defaultProps = defaultProps;

export default DocsBox;
