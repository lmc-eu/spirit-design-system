import React, { ReactNode } from 'react';
import { Tag } from '../src/components';

interface DocsSectionProps {
  children: ReactNode;
  hasStack?: boolean;
  stackAlignment?: 'start' | 'center' | 'end';
  tag?: string;
  title: string;
}

const DocsSection = ({ children, hasStack = true, stackAlignment = 'start', title, tag }: DocsSectionProps) => (
  <section className="docs-Section">
    <h2 className="docs-Heading">
      {title}
      {tag && (
        <Tag color="warning" isSubtle>
          {tag}
        </Tag>
      )}
    </h2>
    {hasStack ? <div className={`docs-Stack docs-Stack--${stackAlignment}`}>{children}</div> : children}
  </section>
);

DocsSection.defaultProps = {
  hasStack: true,
  stackAlignment: 'start',
  tag: '',
};

export default DocsSection;
