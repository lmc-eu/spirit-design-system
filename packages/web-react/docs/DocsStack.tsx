import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { StyleProps, useStyleProps } from '../src';

interface DocsStackProps extends StyleProps {
  children: ReactNode;
  stackAlignment?: 'start' | 'center' | 'end' | 'stretch';
}

const defaultProps: Partial<DocsStackProps> = {
  stackAlignment: undefined,
};

const DocsStack = (props: DocsStackProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, stackAlignment, ...restProps } = propsWithDefaults;
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const alignmentClass = stackAlignment ? `docs-Stack--${stackAlignment}` : '';

  return (
    <div {...styleProps} {...transferProps} className={classNames('docs-Stack', alignmentClass)}>
      {children}
    </div>
  );
};

export default DocsStack;
