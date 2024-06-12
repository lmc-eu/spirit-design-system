import React, { ReactNode } from 'react';
import { Tag } from '../src/components';
import DocsStack from './DocsStack';

interface DocsSectionProps {
  children: ReactNode;
  hasStack?: boolean;
  stackAlignment?: 'start' | 'center' | 'end' | 'stretch';
  tag?: string;
  title: string;
}

const DocsSection = ({ children, hasStack = true, stackAlignment = 'start', title, tag }: DocsSectionProps) => (
  <section className="UNSTABLE_Section">
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

DocsSection.defaultProps = {
  hasStack: true,
  stackAlignment: 'start',
  tag: '',
};

export default DocsSection;
