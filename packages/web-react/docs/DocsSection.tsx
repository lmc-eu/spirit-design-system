import React, { ReactNode } from 'react';
import { Container, Section, StyleProps, Tag, useStyleProps } from '../src';
import DocsStack from './DocsStack';

interface DocsSectionProps extends StyleProps {
  children: ReactNode;
  container?: 'none' | 'all' | 'heading-only';
  hasPadding?: boolean;
  hasStack?: boolean;
  stackAlignment?: 'start' | 'center' | 'end' | 'stretch';
  tag?: string;
  title: string;
}

const defaultProps: Partial<DocsSectionProps> = {
  container: 'all',
  hasPadding: true,
  hasStack: true,
  stackAlignment: 'start',
  tag: '',
};

const DocsSection = (props: DocsSectionProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, container, hasPadding, hasStack, stackAlignment, title, tag, ...restProps } = propsWithDefaults;
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
    <Section
      hasContainer={container === 'all'}
      size={hasPadding ? 'xsmall' : undefined}
      {...styleProps}
      {...transferProps}
    >
      {content}
    </Section>
  );
};

export default DocsSection;
