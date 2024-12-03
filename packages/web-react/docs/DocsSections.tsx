import React, { ReactNode } from 'react';
import { Container, StyleProps, Tag, useStyleProps } from '../src';
import DocsStack from './DocsStack';

interface DocsSectionProps extends StyleProps {
  children: ReactNode;
  container?: 'none' | 'all' | 'heading-only';
  hasStack?: boolean;
  stackAlignment?: 'start' | 'center' | 'end' | 'stretch';
  tag?: string;
  title: string;
}

const defaultProps: Partial<DocsSectionProps> = {
  container: 'all',
  hasStack: true,
  stackAlignment: 'start',
  tag: '',
};

const DocsSection = (props: DocsSectionProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, container, hasStack, stackAlignment, title, tag, ...restProps } = propsWithDefaults;
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const heading = (
    <h2 className="docs-Heading">
      {title}
      {tag && (
        <Tag color="warning" isSubtle>
          {tag}
        </Tag>
      )}
    </h2>
  );

  const content = (
    <>
      {container === 'heading-only' ? <Container>{heading}</Container> : heading}
      {hasStack ? <DocsStack stackAlignment={stackAlignment}>{children}</DocsStack> : children}
    </>
  );

  return (
    <section {...styleProps} {...transferProps} className="UNSTABLE_Section">
      {container === 'all' ? <Container>{content}</Container> : content}
    </section>
  );
};

export default DocsSection;
