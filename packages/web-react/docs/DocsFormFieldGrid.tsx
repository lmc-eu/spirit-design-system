import React, { ReactNode } from 'react';

interface DocsFormFieldGridProps {
  children: ReactNode;
}

const DocsFormFieldGrid = ({ children }: DocsFormFieldGridProps) => (
  <div className="docs-FormFieldGrid">{children}</div>
);

export default DocsFormFieldGrid;
