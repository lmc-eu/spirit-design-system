import React, { ReactNode } from 'react';
import { StyleProps, Tag, useStyleProps } from '../src';
import DocsStack from './DocsStack';

interface DocsSectionProps extends StyleProps {
  children: ReactNode;
  hasStack?: boolean;
  stackAlignment?: 'start' | 'center' | 'end' | 'stretch';
  tag?: string;
  title: string;
}

const defaultProps: Partial<DocsSectionProps> = {
  hasStack: true,
  stackAlignment: 'start',
  tag: '',
};

const DocsSection = (props: DocsSectionProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, hasStack = true, stackAlignment = 'start', title, tag, ...restProps } = propsWithDefaults;
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <section {...styleProps} {...transferProps} className="UNSTABLE_Section">
      <h2 className="docs-Heading">
        {title}
        {tag && (
          <Tag color="warning" isSubtle>
            {tag}
          </Tag>
        )}
      </h2>
      {hasStack ? <DocsStack stackAlignment={stackAlignment}>{children}</DocsStack> : children}
    </section>
  );
};

export default DocsSection;
