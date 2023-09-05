import React, { ReactNode } from 'react';
import { Tag } from '../src/components';

interface DocsSectionProps {
  children: ReactNode;
  tag?: string;
  title: string;
}

const DocsSection = ({ children, title, tag }: DocsSectionProps) => (
  <section className="docs-Section">
    <h2 className="docs-Heading">
      {title}
      {tag && (
        <Tag color="warning" isSubtle>
          {tag}
        </Tag>
      )}
    </h2>
    {children}
  </section>
);

DocsSection.defaultProps = {
  tag: '',
};

export default DocsSection;
