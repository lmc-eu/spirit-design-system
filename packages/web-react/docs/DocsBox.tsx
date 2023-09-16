import React, { ReactNode } from 'react';
import { SizesDictionaryType, StyleProps } from '../src/types';
import { useStyleProps } from '../src/hooks';

interface DocsBoxProps extends StyleProps {
  children: ReactNode;
  size?: SizesDictionaryType;
}

const defaultProps = {
  size: 'medium',
};

const DocsBox = ({ children, size, ...restProps }: DocsBoxProps) => {
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const sizeClass = size ? `docs-Box--${size}` : '';

  return (
    <div {...styleProps} {...transferProps} className={`docs-Box ${sizeClass} ${styleProps.className}`}>
      {children}
    </div>
  );
};

DocsBox.defaultProps = defaultProps;

export default DocsBox;
