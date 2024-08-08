import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { SizesDictionaryType, StyleProps, useStyleProps } from '../src';

interface DocsBoxProps extends StyleProps {
  children: ReactNode;
  size?: SizesDictionaryType;
}

const defaultProps: Partial<DocsBoxProps> = {
  size: 'medium',
};

const DocsBox = (props: DocsBoxProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, size, ...restProps } = propsWithDefaults;
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const sizeClass = size ? `docs-Box--${size}` : '';

  return (
    <div {...styleProps} {...transferProps} className={classNames('docs-Box', sizeClass, styleProps.className)}>
      {children}
    </div>
  );
};

export default DocsBox;
