import React, { ReactNode } from 'react';

interface DocsSectionProps {
  children: ReactNode;
  title: string;
}

const DocsSection = ({ children, title }: DocsSectionProps) => (
  <section className="docs-Section">
    <h2 className="docs-Heading">{title}</h2>
    {children}
  </section>
);

export default DocsSection;
