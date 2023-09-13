import React, { ReactNode } from 'react';

interface DocsStackProps {
  children: ReactNode;
  stackAlignment?: 'start' | 'center' | 'end';
}

const DocsStack = ({ children, stackAlignment }: DocsStackProps) => {
  const alignmentClass = stackAlignment ? `docs-Stack--${stackAlignment}` : '';

  return <div className={`docs-Stack ${alignmentClass}`}>{children}</div>;
};

DocsStack.defaultProps = {
  stackAlignment: '',
};

export default DocsStack;
